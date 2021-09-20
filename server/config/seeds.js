const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tops' },
    { name: 'Bottoms' },
    { name: 'Jackets' },
    { name: 'Active' },
    { name: 'Men' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Redburst Blouse',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top1.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 10
    },
    {
      name: 'Sea-foam long-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top2.jpg',
      category: categories[0]._id,
      price: 21.99,
      quantity: 10
    },
    {
      name: 'lightspun long-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top3.jpg',
      category: categories[0]._id,
      price: 21.99,
      quantity: 10
    },
    {
      name: 'Sunshine Blouse',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top4.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 10
    },
    {
      name: 'Plaid long-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top5.jpg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Plaid short-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top6.jpg',
      category: categories[0]._id,
      price: 23.99,
      quantity: 10
    },
    {
      name: 'flower-field blouse',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top7.jpg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Boyfriend Long-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top8.jpg',
      category: categories[0]._id,
      price: 26.99,
      quantity: 10
    },
    {
      name: 'Rosy blouse',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top9.jpg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 10
    },
    {
      name: 'flower-field short-sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top10.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 10
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
