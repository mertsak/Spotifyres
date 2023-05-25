import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else return new Response(JSON.stringify(null));
}
