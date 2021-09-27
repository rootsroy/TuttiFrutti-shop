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
      name: 'Redburst Top',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top1.jpeg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 10
    },
    {
      name: 'Sea-Foam Long-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top2.jpeg',
      category: categories[0]._id,
      price: 21.99,
      quantity: 10
    },
    {
      name: 'Lightspun Long-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top3.jpeg',
      category: categories[0]._id,
      price: 21.99,
      quantity: 10
    },
    {
      name: 'Sunshine Top',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top4.jpeg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 10
    },
    {
      name: 'Plaid Long-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top5.jpeg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Plaid Short-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top6.jpeg',
      category: categories[0]._id,
      price: 23.99,
      quantity: 10
    },
    {
      name: 'Flower-Field Top',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top7.jpeg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Boyfriend Long-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top8.jpeg',
      category: categories[0]._id,
      price: 26.99,
      quantity: 10
    },
    {
      name: 'Rosy Top',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top9.jpeg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 10
    },
    {
      name: 'Flower-Field Short-Sleeve',
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'top10.jpeg',
      category: categories[0]._id,
      price: 21.99,
      quantity: 10
    },
    {
      name: 'Flyn Pant',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom1.jpeg',
      price: 37.99,
      quantity: 10
    },
    {
      name: 'Bermuda Shorts',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom2.jpeg',
      price: 35.99,
      quantity: 10
    },
    {
      name: 'Curdory Wide leg Pant',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom3.jpeg',
      price: 32.55,
      quantity: 10
    },
    {
      name: 'Coral Wide Leg Pant',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom4.jpeg',
      price: 34.55,
      quantity: 10
    },
    {
      name: 'Stripe Wide Leg Pant',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom5.jpeg',
      price: 34.99,
      quantity: 10
    },
    {
      name: 'Denim Wide Leg Pant',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom6.jpeg',
      price: 44.55,
      quantity: 10
    },
    {
      name: 'Lys Shorts',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom7.jpeg',
      price: 34.99,
      quantity: 10
    },
    {
      name: 'Daily Shorts',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom8.jpeg',
      price: 34.75,
      quantity: 10
    },
    {
      name: 'Poplin Skirt',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom9.jpeg',
      price: 37.55,
      quantity: 10
    },
    {
      name: 'Weekender Skirt',
      category: categories[1]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'bottom10.jpeg',
      price: 44.99,
      quantity: 10
    },
    {
      name: 'Oversized Plaid Jacket',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'jacket1.jpeg',
      price: 70.99,
      quantity: 10
    },
    {
      name: 'Plaid Jakcet',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'jacket2.jpeg',
      price: 60.55,
      quantity: 10
    },
    {
      name: 'Quilted Puffer Jacket',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'jacket3.jpeg',
      price: 49.55,
      quantity: 10
    },
    {
      name: 'Addition Vest',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'jacket4.jpeg',
      price: 65.55,
      quantity: 10
    },
    {
      name: 'Quilted Coat',
      category: categories[2]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'jacket5.jpeg',
      price: 60.99,
      quantity: 10
    },
    {
      name: 'Form Crop Top',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active1.jpeg',
      price: 29.99,
      quantity: 10
    },
    {
      name: 'Form High-Rise Leggings',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active2.jpeg',
      price: 25.99,
      quantity: 10
    },
    {
      name: 'Form High-Rise Leggings',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active3.jpeg',
      price: 30.99,
      quantity: 10
    },
    {
      name: 'Form High-Rise Biker Shorts',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active4.jpeg',
      price: 32.55,
      quantity: 10
    },
    {
      name: 'Colorblock Crop Top',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active5.jpeg',
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Half-Zip Crop Top',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active6.jpeg',
      price: 30.55,
      quantity: 10
    },
    {
      name: 'Colorblock Form Leggings',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active7.jpeg',
      price: 19.99,
      quantity: 10
    },
    {
      name: 'Tri-Color Crop Top',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active8.jpeg',
      price: 29.99,
      quantity: 10
    },
    {
      name: 'High-Rise Leggings',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active9.jpeg',
      price: 28.99,
      quantity: 10
    },
    {
      name: 'Form High-Rise Leggings',
      category: categories[3]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'active10.jpeg',
      price: 29.75,
      quantity: 10
    },
    {
      name: 'Knitted Sweater',
      category: categories[4]._id,
      description: '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men1.jpeg',
      price: 31.99,
      quantity: 10
    },
    {
      name: 'Puffer Jacket',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men2.jpeg',
      price: 72.39,
      quantity: 10
    },
    {
      name: 'Cargo Pant',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men3.jpeg',
      price: 37.75,
      quantity: 10
    },
    {
      name: 'Fleece Button Up',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men4.jpeg',
      price: 29.55,
      quantity: 10
    },
    {
      name: 'Corduroy Jacket',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men5.jpeg',
      price: 29.59,
      quantity: 10
    },
    {
      name: 'Heather Long-Sleeve',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men6.jpeg',
      price: 19.75,
      quantity: 10
    },
    {
      name: 'Plaid Long-Sleeve',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men7.jpeg',
      price: 26.99,
      quantity: 10
    },
    {
      name: 'Straight-Leg Pant',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men8.jpeg',
      price: 37.85,
      quantity: 10
    },
    {
      name: 'Straight-Leg Pant',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men9.jpeg',
      price: 37.85,
      quantity: 10
    },
    {
      name: 'Straight-Leg Corduroy Overalls',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men10.jpeg',
      price: 50.85,
      quantity: 10
    },
    {
      name: 'Lounge Joggers',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men11.jpeg',
      price: 32.99,
      quantity: 10
    },
    {
      name: 'Denim Button Up',
      category: categories[4]._id,
      description:
        '100% cotton, machine wash, low tumble dry. We partner with the Better Cotton Initiative to improve cotton farming globally.',
      image: 'men12.jpeg',
      price: 30.55,
      quantity: 10
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
