import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the request
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save the message to MongoDB
    // 2. Send an email notification
    // 3. Process the data as needed

    // Example MongoDB code (commented out):
    /*
    import { connectToDatabase } from '@/lib/mongodb';
    
    const { db } = await connectToDatabase();
    
    await db.collection('messages').insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });
    */

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

