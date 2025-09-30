import { Platform } from "react-native";

export const appwriteConfig={
  endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  Platform:"com.dine4u.foodorderning",
  projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId:'68d7c1b30025986a03de',
  userCollectionId:'user'
}