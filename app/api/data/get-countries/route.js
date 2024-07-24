import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const countries = await response.json();

    const regions = countries.map((country) => ({
      label: country.name,
      value: country.name,
      image: country.image,
    }));

    return NextResponse.json(regions);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch countries", error: error.message },
      { status: 500 }
    );
  }
}
