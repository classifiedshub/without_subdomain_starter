import db from "@/lib/database/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      businessName,
      description,
      county,
      region,
      industry,
      role,
      teamSize,
      channel,
      goal,
      plan,
      paymentMethod,
      isAnnual,
      isPaid,
      amount,
      phone,
      apiKey,
      bearerToken,
      clientId,
      clientSecret,
      username,
    } = await req.json();

    // Update the user profile
    const userReg = await db.user.update({
      where: {
        email,
      },
      data: {
        firstName,
        lastName,
      },
    });
    console.log("Profile updated...");

    // Check if user account exists
    const userAcc = await db.userAccount.findUnique({
      where: {
        userId: userReg.id,
      },
    });

    if (!userAcc) {
      return NextResponse.json(
        {
          data: null,
          message: "No user found with this email address",
        },
        {
          status: 400,
        }
      );
    }

    const accountId = userAcc.id;

    // Create business info
    const businessInfo = await db.businessInfo.create({
      data: {
        accountId,
        businessName,
        description,
        county: county.value,
        region: region.value,
        industry,
        role,
        teamSize,
        phone
      },
    });
    console.log("Business details added...");

    // Create preferences
    const preferences = await db.preferences.create({
      data: {
        accountId,
        channel,
        goal,
      },
    });
    console.log("Account preferences added...");

    // Create subscription
    const subscriptions = await db.subscription.create({
      data: {
        accountId,
        plan,
        paymentMethod,
        isAnnual,
        isPaid,
        amount,
      },
    });
    console.log("Subscriptions added...");

    // Create settings
    const settings = await db.settings.create({
      data: {
        accountId,
      },
    });
    console.log("Account settings created...");

    const settingsId = settings.id;

    // Create email account
    const emailAccount = await db.emailAccount.create({
      data: {
        settingsId,
        apiKey,
      },
    });

    // Create Twitter account
    const twitterAccount = await db.twitterAccount.create({
      data: {
        settingsId,
        bearerToken,
        clientId,
        clientSecret,
        username,
      },
    });

    // Prepare onboard data
    const onboardData = {
      ...userAcc,
      ...businessInfo,
      ...preferences,
      ...subscriptions,
      ...emailAccount,
      ...twitterAccount,
    };

    console.log(onboardData);

    return NextResponse.json(
      {
        data: onboardData,
        message: "Customer onboarding is successful",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error.message);

    return NextResponse.json(
      {
        data: null,
        message: "An error occurred while onboarding the user",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
