/*
  Warnings:

  - You are about to drop the column `activityLevel` on the `body_measurements` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionGoal` on the `body_measurements` table. All the data in the column will be lost.
  - You are about to drop the column `orderItemId` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `recipe_ingredient_ud` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `genderId` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `recipe_ingredient_id` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_recipe_ingredient_ud_fkey";

-- AlterTable
ALTER TABLE "body_measurements" DROP COLUMN "activityLevel",
DROP COLUMN "nutritionGoal",
ADD COLUMN     "activity_level" "ActivityLevel",
ADD COLUMN     "nutrition_goal" "NutritionGoal";

-- AlterTable
ALTER TABLE "ingredients" DROP COLUMN "orderItemId";

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "recipe_ingredient_ud",
ADD COLUMN     "recipe_ingredient_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "genderId";

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_recipe_ingredient_id_fkey" FOREIGN KEY ("recipe_ingredient_id") REFERENCES "recipe_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
