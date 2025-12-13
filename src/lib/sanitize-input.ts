interface SanitizeOptions {
  maxLength?: number;
  allowSpecialChars?: boolean;
  minLength?: number;
}

/**
 * Sanitizes user search input to prevent injection attacks
 * @param input - Raw search input from user
 * @param options - Configuration options
 * @returns Sanitized string or null if invalid
 */
export function sanitizeInput(input: string, options: SanitizeOptions = {}): string | null {
  const {
    maxLength = 200,
    allowSpecialChars = false,
    minLength = 1,
  } = options;

  let sanitized: string = input.trim();

  if (sanitized.length < minLength || sanitized.length > maxLength) {
    return null;
  }

  sanitized = sanitized.replace(/\0/g, '');

  // Remove SQL injection patterns
  const sqlPatterns: RegExp[] = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|DECLARE)\b)/gi,
    /(--|;|\/\*|\*\/|xp_|sp_)/gi, // SQL comments and stored procedures
    /('|(\\')|(;)|(\-\-)|(\/)|(\\))/gi, // Common SQL injection chars
    /(\bOR\b.*=.*)/gi, // OR 1=1 patterns
    /(\bAND\b.*=.*)/gi, // AND 1=1 patterns
  ];

  for (const pattern of sqlPatterns) {
    if (pattern.test(sanitized)) {
      console.warn('Potential SQL injection attempt detected');
      return null;
    }
  }

  // Remove XSS patterns
  const xssPatterns: RegExp[] = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi, // Event handlers like onclick=
    /<\s*\w+[^>]*>/gi, // HTML tags
  ];

  for (const pattern of xssPatterns) {
    sanitized = sanitized.replace(pattern, '');
  }

  // Encode HTML entities
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

  // If special characters not allowed, use strict whitelist
  if (!allowSpecialChars) {
    // Allow only alphanumeric, spaces, and basic punctuation
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s\-_.,']/g, '');
  }

  // Collapse multiple spaces
  sanitized = sanitized.replace(/\s+/g, ' ').trim();

  return sanitized || null;
}

