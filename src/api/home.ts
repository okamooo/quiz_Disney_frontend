import { HomeData } from "../types/home";

// 本来は .env などから取得しますが、まずはローカルホストを直書きします
const BASE_URL = "http://localhost:8080/api/v1/quiz";

/**
 * ホーム画面に必要なデータを取得する
 * @param loginId ログインユーザーのID
 */
export const getHomeData = async (loginId: string): Promise<HomeData> => {
  const response = await fetch(`${BASE_URL}/home?loginId=${loginId}`);

  if (!response.ok) {
    throw new Error("ホームデータの取得に失敗しました");
  }

  const data = await response.json();
  return data;
};
