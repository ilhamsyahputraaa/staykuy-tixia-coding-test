export async function getListKota() {
  try {
    const response = await fetch("https://ota-gin.onrender.com/api/v1/cities", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return { data: [], success: false };
  }
}

export async function searchHotel(
  hotel_id?: number,
  city_id?: number,
  date?: string,
  nights: number = 1,
  room_count: number = 1,
  min_price?: number,
  max_price?: number,
  adult_guests: number = 2,
  child_guests: number = 0,
  stars?: string,
  facilities?: string,
  is_breakfast_included?: boolean,
  sort_by_price?: string,
  page: number = 1,
  page_size: number = 10
) {
  const queryParams = new URLSearchParams({
    nights: nights.toString(),
    room_count: room_count.toString(),
    adult_guests: adult_guests.toString(),
    child_guests: child_guests.toString(),
    page: page.toString(),
    page_size: page_size.toString(),
  });

  if (hotel_id) {
    queryParams.append("hotel_id", hotel_id.toString());
  }
  if (city_id) {
    queryParams.append("city_id", city_id.toString());
  }

  if (date) {
    queryParams.append("date", date);
  }

  if (min_price) {
    queryParams.append("min_price", min_price.toString());
  }
  if (max_price) {
    queryParams.append("max_price", max_price.toString());
  }
  if (stars) {
    queryParams.append("stars", stars.toString());
  }
  if (facilities) {
    queryParams.append("facilities", facilities.toString());
  }
  if (is_breakfast_included) {
    queryParams.append(
      "is_breakfast_included",
      is_breakfast_included.toString()
    );
  }
  if (sort_by_price) {
    queryParams.append("sort_by_price", sort_by_price.toString());
  }

  const response = await fetch(
    `https://ota-gin.onrender.com/api/v1/${queryParams}`
  );
  const data = await response.json();
  return data;
}
