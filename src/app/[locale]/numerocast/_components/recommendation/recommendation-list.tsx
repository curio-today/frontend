import { RecommendationCard } from "./recommendation-card";
import { Recommendation } from "../../_types/recommendation";

interface RecommendationListProps {
    recommendations: Recommendation[];
}

export const RecommendationList = ({ recommendations }: RecommendationListProps) => {
    return (
        <ul className="flex flex-col gap-4 list-none">
            {recommendations.map((recommendation, index) => (
                <RecommendationCard key={recommendation.emoji} index={index} {...recommendation} />
            ))}
        </ul>
    );
};