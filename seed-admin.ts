import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPhone = "9999999999";
  const passwordText = "adminpassword";
  const hashedPassword = await bcrypt.hash(passwordText, 10);
  
  const user = await prisma.user.upsert({
    where: { phone: adminPhone },
    update: { 
      role: "ADMIN", 
      password: hashedPassword 
    },
    create: {
      phone: adminPhone,
      password: hashedPassword,
      role: "ADMIN"
    }
  });
  
  console.log(`Admin user seeded successfully!`);
  printUserInfo(user);
}

function printUserInfo(user: any) {
  console.log(`ID: ${user.id}`);
  console.log(`Phone: ${user.phone}`);
  console.log(`Role: ${user.role}`);
}

main()
  .catch((e) => {
    console.error("Error seeding admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
