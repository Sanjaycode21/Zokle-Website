import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, budgetRange, details } = body;

    // Validate inputs serverside
    if (!name || !email || !businessType || !budgetRange || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Output submission details to server log
    console.log('================ CONTACT INQUIRY RECEIVED ================');
    console.log(`Name:          ${name}`);
    console.log(`Email:         ${email}`);
    console.log(`Phone:         ${phone || 'Not provided'}`);
    console.log(`Business Type: ${businessType}`);
    console.log(`Budget Range:  ${budgetRange}`);
    console.log(`Project Brief:\n${details}`);
    console.log('===========================================================');

    // Simulate database write or Resend API execution delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error occurred processing details.' },
      { status: 500 }
    );
  }
}
