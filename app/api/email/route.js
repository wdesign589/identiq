import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import WalletEmail from '@/emails/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {name, wallet, active} = await request.json();
    await resend.emails.send({
        from: 'wallets@i-dentiq.org',
        to: 'info@i-dentiq.org',
        subject: 'Wallet Aquired',
        react: <WalletEmail user={name} wallet={wallet} active={active} />,
      });

      return NextResponse.json({
        status : "ok"
      })
}