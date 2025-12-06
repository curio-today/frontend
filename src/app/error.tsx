'use client' 

import { useEffect } from 'react'
import { toast } from 'sonner'
 
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    toast.error(error.name, {
        description: error.message,
    });
  }, [error])
 
  return null;
}