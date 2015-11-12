var categories = {
  "Arts & Architecture": {
    xola: ["Art & Architecture","Creative Classes",]
  },
  "Concerts": {
    "stubhub": "1"
  },
  "Culture & History": {
    "xola": ["Archaeology","Culture & History",]
  },
  "Food": {
    xola: ["Beer Tour","Food & Wine",]
  },
  "Festival": {
    "xola": ["Film Screening","Music/Rafting festival",]
  },
  "Live Sports": {
    "stubhub": "28"
  },
  "Outdoor & Nature": {
    "xola": ["Action Sports Training","Aerial Tours","Backpacking/Camping",
    "Ballooning","Birdwatching","Bungee Jumping","Canyoning","Caving / Spelunking",
    "Cross Country Skiing","Cycling & Mountain Biking","Deep Sea Fishing",
    "Dog Sledding","Eco-Tour/Hike","Fly Fishing","Gliders","Guide School",
    "Hang Gliding ","Heli-skiing","Helicopter Tours","Horseback Riding","Houseboats",
    "Kayaking & Canoeing","Lake Fishing","Marine Wildlife","Motor Yacht",
    "Mountaineering","Ocean Cruises","Off-road","Parachuting","Paragliding",
    "Private Jet Tours","River Cruises","River Rafting","River Tubing ","Rock Climbing",
    "Safety Training","Sailing","Scuba & Snorkeling","Ski Tours","Skiing ",
    "Skydiving","Sleigh Riding","Snow Tubing","Snowcat Skiing","Snowkiting",
    "Snowmobiling","Snowshoeing","Stand Up Paddle (SUP)","Surfing","Team Building",
    "Trekking / Hiking","Wakeboarding","Wilderness Training","Wildlife Safaris",
    "Windsurfing & Kitesurfing","Zip-lining"]
  },
  "Movie & Photography": {
    "xola": ["Photography","Film Screening","Movie"]
  },
  "Summits": {
    "xola": ["Tourism & Technology Summit","Website Creation"]
  },
  "Theatre & Comedy": {
    "stubhub": "174"
  },
  "Volunteering": {
    "xola": ["Volunteering"]
  },
  "Walking Tours": {
    "xola": ["Walking Tours"]
  }

}

module.exports = {
  // Returns an array containing all category names
  getAllCategoryNames: function() {
    var array = [];
    for (var categoryName in categories) {
      array.push(categoryName)
    }
    return array;
  },

  getXolaSearchCategory: function(appCategory) {
    if (categories[appCategory]) {
      return categories[appCategory].xola
    } else {
      console.warn("getXolaSearchCategory failed: " + appCategory)
    }
  },

  getStubhubSearchCategory: function(appCategory) {
    if (categories[appCategory]) {
      return categories[appCategory].stubhub;
    } else {
      console.warn("getStubhubSearchCategory failed: " + appCategory)
    }
  },

  getAppCategory: function(searchCategory) {
    for(appCategory in categories) {
      if (categories[appCategory].stubhub === searchCategory) {
        return appCategory;
      } else if (categories[appCategory].xola) {
        if (categories[appCategory].xola.indexOf(searchCategory) > -1) {
          return appCategory;
        }
      }
    }
    console.warn("getAppCategory failed: " + searchCategory)
  }
}
