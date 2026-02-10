import { RecommendationCard } from "./recommendation-card";
import { Recommendation } from "../../_types/recommendation";

interface RecommendationListProps {
    recommendations: Recommendation[];
}

export const RecommendationList = ({ recommendations }: RecommendationListProps) => {
    return (
        <ul className="flex flex-col gap-4 list-none justify-between">
            {recommendations.map((recommendation, index) => {
                if (!recommendation.title) {
                    return;
                }
                return (
                    <RecommendationCard key={recommendation.id} index={index} {...recommendation} />
                );
            })}
        </ul>
    );
};