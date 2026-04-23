export async function POST(request: Request) {
  const body = await request.json();

  const { nombre, clinica, email, whatsapp } = body;

  if (!nombre || !clinica || !email || !whatsapp) {
    return Response.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 }
    );
  }

  // In production, this would send to a CRM, email, or database.
  // For now, log and return success.
  console.log("Demo request:", { nombre, clinica, email, whatsapp });

  return Response.json({ success: true });
}
