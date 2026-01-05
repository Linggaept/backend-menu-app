const express = require('express');
const router = express.Router();
const {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
} = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');

/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       required:
 *         - category
 *         - name
 *         - description
 *         - image
 *       properties:
 *         category:
 *           type: string
 *           description: The ID of the category this menu item belongs to
 *         name:
 *           type: string
 *           description: The name of the menu item
 *         description:
 *           type: string
 *           description: A description of the menu item
 *         image:
 *           type: string
 *           description: URL of the menu item image
 *         time:
 *           type: number
 *           description: The preparation time in minutes
 *         slot:
 *           type: number
 *           description: The number of available slots
 */

/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Menu management
 */

/**
 * @swagger
 * /api/menus:
 *   post:
 *     summary: Create a new menu item
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Menu'
 *     responses:
 *       201:
 *         description: The menu item was successfully created
 *       400:
 *         description: Invalid menu data
 *       401:
 *         description: Not authorized
 *   get:
 *     summary: Get all menu items
 *     tags: [Menus]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Keyword to search for in menu names
 *     responses:
 *       200:
 *         description: A list of menu items
 */
router.route('/').post(protect, createMenu).get(getMenus);

/**
 * @swagger
 * /api/menus/{id}:
 *   get:
 *     summary: Get a menu item by ID
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu item ID
 *     responses:
 *       200:
 *         description: The menu item data
 *       404:
 *         description: Menu item not found
 *   put:
 *     summary: Update a menu item
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Menu'
 *     responses:
 *       200:
 *         description: The updated menu item data
 *       400:
 *         description: Invalid menu data
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Menu item not found
 *   delete:
 *     summary: Delete a menu item
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The menu item ID
 *     responses:
 *       200:
 *         description: Menu item removed
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Menu item not found
 */
router
  .route('/:id')
  .get(getMenuById)
  .put(protect, updateMenu)
  .delete(protect, deleteMenu);

module.exports = router;
