import { Video } from "@/types/api/video";
import { Precept } from "@/app/[locale]/numerocast/_types/precept";

export interface Numerocast {
    title: string;
    date: string;
    precepts: Precept[];
    description: string;
    video: Video | null;
    cover: {
        url: string;
    };
}

export async function getNumerocast(): Promise<Numerocast> {
    return {
        title: "Нумерокаст",
        date: "9 февраля",
        precepts: [
            { emoji: "🗣️", title: "Слово имеет невероятную силу сегодня." },
            { emoji: "🤍", title: "Не осуждайте" },
            { emoji: "🧹", title: "Избавьтесь от слов паразитов." },
            { emoji: "🙊", title: "Не провоцируйте сквернословие в свой адрес" },
            { emoji: "🤐", title: "Не сплетничайте" },
            { emoji: "🚫", title: "Нельзя ничего разрушать." }
        ],
        description: "24 листопада • Слово має неймовірну силу сьогодні. #прогноздня #лунныйкалендарь #нумерологическийпрогноз #гумилёванумеролог",
        video: {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        // video: null
        cover: {
            url: "",
        }
    };
}