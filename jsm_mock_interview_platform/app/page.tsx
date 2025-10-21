// app/page.tsx

import { redirect } from 'next/navigation';

export default function HomeRedirect() {
  // This tells the router that anyone hitting the root URL (/) 
  // should immediately be sent to /sign-in.
  redirect('/sign-in');
}