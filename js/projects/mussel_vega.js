let specific_regions = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {
    "values": [
      {
        "General Location": "Port Valdez",
        "Specific Location": "Alyeska Marine Terminal",
        "Count": 4360
      },
      {
        "General Location": "Port Valdez",
        "Specific Location": "Gold Creek",
        "Count": 4235
      },
      {
        "General Location": "Resurrection Bay",
        "Specific Location": "Nash Road",
        "Count": 3720
      },
      {
        "General Location": "Mississippi Sound",
        "Specific Location": "Pascagoula Bay",
        "Count": 3339
      },
      {
        "General Location": "Breton Sound",
        "Specific Location": "Bay Gardene",
        "Count": 3337
      },
      {
        "General Location": "Caillou Lake",
        "Specific Location": "Caillou Lake",
        "Count": 3284
      },
      {
        "General Location": "Terrebonne Bay",
        "Specific Location": "Lake Barre",
        "Count": 3276
      },
      {
        "General Location": "Cedar Key",
        "Specific Location": "Black Point",
        "Count": 3188
      },
      {
        "General Location": "Tampa Bay",
        "Specific Location": "Mullet Key Bayou",
        "Count": 3179
      },
      {
        "General Location": "Mississippi Sound",
        "Specific Location": "Pass Christian",
        "Count": 3162
      },
      {
        "General Location": "Barataria Bay",
        "Specific Location": "Middle Bank",
        "Count": 3154
      },
      {
        "General Location": "Lake Borgne",
        "Specific Location": "Malheureux Point",
        "Count": 3146
      },
      {
        "General Location": "Tampa Bay",
        "Specific Location": "Navarez Park",
        "Count": 3120
      },
      {
        "General Location": "Charlotte Harbor",
        "Specific Location": "Bird Island",
        "Count": 3069
      },
      {
        "General Location": "Barataria Bay",
        "Specific Location": "Bayou Saint Denis",
        "Count": 3052
      },
      {
        "General Location": "Apalachicola Bay",
        "Specific Location": "Dry Bar",
        "Count": 3028
      },
      {
        "General Location": "Apalachicola Bay",
        "Specific Location": "Cat Point Bar",
        "Count": 3027
      }
    ]
  },
  "mark": "bar",
  "encoding": {
    "color": {"type": "nominal", "field": "General Location"},
    "tooltip": [
      {"type": "quantitative", "field": "Count"},
      {"type": "nominal", "field": "Specific Location"},
      {"type": "nominal", "field": "General Location"}
    ],
    "x": {"type": "quantitative", "field": "Count"},
    "y": {"type": "nominal", "field": "Specific Location"}
  },
  "title": "Most popular Specific Locations",
  "width": 500,
}

let length_width = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {
    "values": [
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 3.7,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 3.5,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Alaska"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Delaware Bay to Gulf of Maine"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3.2,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3.2,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3.1,
        "Wet Weight (ounces)": 1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3.1,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.9,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 0.7,
        "Wet Weight (ounces)": 0,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 0.8,
        "Wet Weight (ounces)": 0,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 0.8,
        "Wet Weight (ounces)": 0,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 0.9,
        "Wet Weight (ounces)": 0,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 0.9,
        "Wet Weight (ounces)": 0,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": null,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.9,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.4,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.3,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.7,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.6,
        "Wet Weight (ounces)": 0.4,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.8,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.4,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.6,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.7,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.5,
        "Wet Weight (ounces)": 0.1,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 1.8,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.1,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.3,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 2.2,
        "Wet Weight (ounces)": 0.2,
        "Specific region": "Great Lakes"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 7.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.6,
        "Wet Weight (ounces)": 13.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 9.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 11.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 26.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 13.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 19.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 16.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 11.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 10.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 7.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 11,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 9.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 21.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 21.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.7,
        "Wet Weight (ounces)": 17.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 14,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 17.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11.6,
        "Wet Weight (ounces)": 29.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.8,
        "Wet Weight (ounces)": 38,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.7,
        "Wet Weight (ounces)": 26.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 12.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 25.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 20.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.9,
        "Wet Weight (ounces)": 13.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 20.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.5,
        "Wet Weight (ounces)": 18.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 8.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 30.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 26.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11.5,
        "Wet Weight (ounces)": 10.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 7.3,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 4.7,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 13.8,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 1.9,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 10.2,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 12.7,
        "Wet Weight (ounces)": 18.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 12.2,
        "Wet Weight (ounces)": 17.2,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 11.5,
        "Wet Weight (ounces)": 13.7,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 13,
        "Wet Weight (ounces)": 16.9,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 12.8,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 17.1,
        "Wet Weight (ounces)": 9.8,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 15,
        "Wet Weight (ounces)": 15,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 12.9,
        "Wet Weight (ounces)": 15.7,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 14.7,
        "Wet Weight (ounces)": 17.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 12.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 12.3,
        "Wet Weight (ounces)": 13.4,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 12.5,
        "Wet Weight (ounces)": 12.9,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 10.1,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 6,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 13,
        "Wet Weight (ounces)": 31.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 13.8,
        "Wet Weight (ounces)": 27,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 15,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 18.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.1,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 20.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 16.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 8.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 11.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 11.2,
        "Wet Weight (ounces)": 15.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.5,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 8.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 12.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 6.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 10.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 11.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 7.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 6.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 11.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 9.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 9.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 17.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 12.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 12.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 12.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 23,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.9,
        "Wet Weight (ounces)": 26.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 10.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 9.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 13,
        "Wet Weight (ounces)": 17.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11.5,
        "Wet Weight (ounces)": 14,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 12,
        "Wet Weight (ounces)": 13.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 20.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 12.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11,
        "Wet Weight (ounces)": 10.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 7.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 5.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 12.2,
        "Wet Weight (ounces)": 34.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 12,
        "Wet Weight (ounces)": 22,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 31,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 13.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 9.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 9.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 8.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 16.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 12.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11,
        "Wet Weight (ounces)": 22.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 9.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 20.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.1,
        "Wet Weight (ounces)": 30.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 19.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 21.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 13.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 17.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 14.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 19.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 20.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.1,
        "Wet Weight (ounces)": 11.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 7.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.2,
        "Wet Weight (ounces)": 17.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.1,
        "Wet Weight (ounces)": 14.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 19.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 10.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 16.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 16.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 16.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 13,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 15.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 12.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 8.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.7,
        "Wet Weight (ounces)": 21,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.9,
        "Wet Weight (ounces)": 22.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.5,
        "Wet Weight (ounces)": 21.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 21.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 12.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 16.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 13.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 14.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 19.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 18.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 16.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 19.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 21.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 8.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 10.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11,
        "Wet Weight (ounces)": 23.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11.3,
        "Wet Weight (ounces)": 19.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.1,
        "Wet Weight (ounces)": 17.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11.5,
        "Wet Weight (ounces)": 20.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 22.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.7,
        "Wet Weight (ounces)": 24,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.8,
        "Wet Weight (ounces)": 33.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 30.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 22.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.1,
        "Wet Weight (ounces)": 22.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 32.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 26.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.7,
        "Wet Weight (ounces)": 26.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 25.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 19.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 31.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.8,
        "Wet Weight (ounces)": 29,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 15.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 21.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.1,
        "Wet Weight (ounces)": 9.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 15.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 8.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 8.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 11,
        "Wet Weight (ounces)": 20.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 12.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 8.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 9.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.6,
        "Wet Weight (ounces)": 14.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 15.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 12.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 20.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 6.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 8.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 12.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 12.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 11.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 10.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 10.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 11.8,
        "Wet Weight (ounces)": 23.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 15.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 12.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 15.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 10.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 19.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 17,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 13.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 11.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 18.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.1,
        "Wet Weight (ounces)": 11.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 11.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.1,
        "Wet Weight (ounces)": 10.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.2,
        "Wet Weight (ounces)": 10.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 9.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 10,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 8.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 12.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 5.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 5.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3,
        "Wet Weight (ounces)": 1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 7.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.1,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 5.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.3,
        "Wet Weight (ounces)": 21.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 21.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 15.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 14,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 12.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 18.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 27.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 18.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 15.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 4.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 9.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 9.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 10.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 1.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 5.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 8.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 8.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 7.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 5.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.6,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.4,
        "Wet Weight (ounces)": 5.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.3,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 5.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 7.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 13.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 11.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 12.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 10.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 8.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 7.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 11.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 10.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.7,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.3,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.3,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 4.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 5.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 9.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 9.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 10.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 6.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.1,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.2,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 12.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 16.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 12,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.1,
        "Wet Weight (ounces)": 15.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 13.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 13.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 6.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 5.4,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 5,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.4,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 1.9,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 1.9,
        "Specific region": "Florida Keys to Cape Hatteras"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 13,
        "Wet Weight (ounces)": 10.8,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 11.6,
        "Wet Weight (ounces)": 10.9,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 10,
        "Wet Weight (ounces)": 6.6,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 4.1,
        "Wet Weight (ounces)": 1,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Brazos River to Rio Grande"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.2,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.3,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.7,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 15.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 9.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.2,
        "Wet Weight (ounces)": 18.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 8.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 18,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 0.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.1,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 14.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 9.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.5,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 7.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 7.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 7.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 5.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 4.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 0.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 6.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 5.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 19.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.3,
        "Wet Weight (ounces)": 23.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 9.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.5,
        "Wet Weight (ounces)": 13,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 9.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 7.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 10.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 9.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 16.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 12.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 11.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 16.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 9.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 11.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 11.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.7,
        "Wet Weight (ounces)": 12.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 13.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 10.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 8.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 8.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.5,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 20.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 10,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 11.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 13.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 10.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 7.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 10.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 21.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.3,
        "Wet Weight (ounces)": 25.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 16,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 18.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 17,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 19,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.8,
        "Wet Weight (ounces)": 18.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 13.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 16.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.4,
        "Wet Weight (ounces)": 11.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 13.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 9.1,
        "Wet Weight (ounces)": 17.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 6.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 9.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 8.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 7.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 6.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.6,
        "Wet Weight (ounces)": 21.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 10.9,
        "Wet Weight (ounces)": 26.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 6.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 13.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 11.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 21.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 13.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 10.5,
        "Wet Weight (ounces)": 18.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.7,
        "Wet Weight (ounces)": 10.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 13.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 10,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 5.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 7.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 9.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 15,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 7.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 10.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 12.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 7.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 10.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.2,
        "Wet Weight (ounces)": 10.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 7.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.5,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 7.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 7.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 11,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 7.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 11.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.2,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.7,
        "Wet Weight (ounces)": 0.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.3,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.6,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 1.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.1,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 8.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.4,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.2,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8,
        "Wet Weight (ounces)": 5.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 6.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 2.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9,
        "Wet Weight (ounces)": 9.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 8.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 10.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 3.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.7,
        "Wet Weight (ounces)": 7.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.2,
        "Wet Weight (ounces)": 6.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 4.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 4.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 1.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.5,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5,
        "Wet Weight (ounces)": 1.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.1,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 3.8,
        "Wet Weight (ounces)": 1.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 1.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.5,
        "Wet Weight (ounces)": 2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.7,
        "Wet Weight (ounces)": 2.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 1.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.9,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.9,
        "Wet Weight (ounces)": 1.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 5.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 4.1,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 3.4,
        "Wet Weight (ounces)": 0.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 3.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.3,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 2.8,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 4.1,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.6,
        "Wet Weight (ounces)": 5.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.5,
        "Wet Weight (ounces)": 5.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 8.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.8,
        "Wet Weight (ounces)": 6.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.3,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.4,
        "Wet Weight (ounces)": 2.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.6,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.1,
        "Wet Weight (ounces)": 1.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.9,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 9.8,
        "Wet Weight (ounces)": 7.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.2,
        "Wet Weight (ounces)": 3.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.3,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 3.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.9,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 1.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 3.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.8,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 3.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.1,
        "Wet Weight (ounces)": 2.9,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.9,
        "Wet Weight (ounces)": 6.8,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.6,
        "Wet Weight (ounces)": 4.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 3.6,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.7,
        "Wet Weight (ounces)": 7.2,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 8.3,
        "Wet Weight (ounces)": 5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 2.3,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 3.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 7,
        "Wet Weight (ounces)": 6.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 6.2,
        "Wet Weight (ounces)": 4.5,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.9,
        "Wet Weight (ounces)": 5.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 3.1,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.7,
        "Wet Weight (ounces)": 2.7,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 4.8,
        "Wet Weight (ounces)": 2.4,
        "Specific region": "Florida Gulf Coast"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 5.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 7.7,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.4,
        "Wet Weight (ounces)": 11.9,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.8,
        "Wet Weight (ounces)": 8.3,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 7.5,
        "Wet Weight (ounces)": 0.5,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.4,
        "Wet Weight (ounces)": 8.2,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 5.6,
        "Wet Weight (ounces)": 4.6,
        "Specific region": "Alabama to Brazos River"
      },
      {
        "Length (inches)": 6.6,
        "Wet Weight (ounces)": 6,
        "Specific region": "Alabama to Brazos River"
      }
    ]
  },
  "mark": "square",
  "encoding": {
    "color": {
      "condition": {
        "type": "nominal",
        "field": "Specific region",
        "scale": {
          "domain": [
            "Alaska",
            "Great Lakes",
            "Delaware Bay to Gulf of Maine",
            "Florida Gulf Coast",
            "Alabama to Brazos River",
            "Florida Keys to Cape Hatteras",
            "Brazos River to Rio Grande"
          ],
          "range": [
            "purple",
            "#3498db",
            "#34495e",
            "#e74c3c",
            "teal",
            "#2ecc71",
            "olive"
          ]
        },
        "selection": "selector011"
      },
      "value": "lightgray"
    },
    "opacity": {"value": 0.7},
    "tooltip": [
      {"type": "nominal", "field": "Specific region"},
      {"type": "quantitative", "field": "Length (inches)"},
      {"type": "quantitative", "field": "Wet Weight (ounces)"}
    ],
    "x": {"type": "quantitative", "field": "Length (inches)"},
    "y": {"type": "quantitative", "field": "Wet Weight (ounces)"}
  },
  "selection": {
    "selector011": {
      "type": "multi",
      "fields": ["Specific region"],
      "on": "click",
      "toggle": "event.shiftKey",
      "resolve": "global",
      "empty": "all"
    },
    "selector012": {
      "type": "interval",
      "bind": "scales",
      "encodings": ["x", "y"],
      "on": "[mousedown, window:mouseup] > window:mousemove!",
      "translate": "[mousedown, window:mouseup] > window:mousemove!",
      "zoom": "wheel!",
      "mark": {"fill": "#333", "fillOpacity": 0.125, "stroke": "white"},
      "resolve": "global"
    }
  },
  "title": "Width and Length relationship",
  "width": 500,
}

vegaEmbed("#specific_regions", specific_regions);
vegaEmbed("#length_width", length_width);