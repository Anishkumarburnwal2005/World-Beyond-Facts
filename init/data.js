const samleFacts = [
    {   
        fact: "The Earth is the third planet from the Sun.", 
        category: "Space", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1S4zNWaQSqEnpCm-Fix14LfRC4Q0pZPeHw&s", 
        source: "NASA", 
        data_discovered: "Established through ancient astronomy and confirmed by modern space missions like Voyager and Apollo.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Honey never spoils.", 
        category: "Nature", 
        related_img: "https://static.toiimg.com/thumb/imgsize-108388,msid-98310646/98310646.jpg?width=500&resizemode=4", 
        source: "National Geographic", 
        data_discovered: "Archaeologists found edible honey in ancient Egyptian tombs due to its unique preservation properties.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The speed of light is 299,792 kilometers per second.", 
        category: "Physics", 
        related_img: "https://cosmosatyourdoorstep.com/wp-content/uploads/2024/04/20160901-speed-of-light-distances.jpg?w=1200", 
        source: "Einstein", 
        data_discovered: "First measured by Ole Rømer in 1676 and later refined by Michelson's experiments.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Bananas are berries, but strawberries are not.", 
        category: "Botany", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMx_-x6d1RbbqNEeOvfujpgdZ5X2Zbv9XDw&s", 
        source: "Botanical Society", 
        data_discovered: "Defined in botany based on fruit structure and seed arrangement classifications.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The Eiffel Tower can be 15 cm taller during the summer.", 
        category: "Engineering", 
        related_img: "https://pbs.twimg.com/media/FFIWwqKWUAYfIPm.jpg", 
        source: "Tourism France", 
        data_discovered: "Thermal expansion of the iron structure was observed during seasonal inspections.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" },
    
    { 
        fact: "Octopuses have three hearts.", 
        category: "Marine Biology", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Vwugl2AAzIKrSMmg0LZJ7TcJoL5mNvDHw&s", 
        source: "Ocean Science", 
        data_discovered: "Marine biologists observed this during dissections and studies on octopus anatomy.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Sharks have been around for over 400 million years.", 
        category: "Zoology", 
        related_img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/09/28/233294.jpg", 
        source: "Marine Life", 
        data_discovered: "Fossil records from the Devonian period revealed sharks existed over 400 million years ago.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A day on Venus is longer than a year on Venus.", 
        category: "Space", 
        related_img: "https://i.ytimg.com/vi/AEE-Nvk_i3Y/maxresdefault.jpg", 
        source: "NASA", 
        data_discovered: "Radar mapping from spacecraft like Magellan in 1990 confirmed this planetary phenomenon.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The longest living animal is the tortoise.", 
        category: "Zoology", 
        related_img: "https://cdn.britannica.com/02/157202-050-26FD69B6/tortoise-ground-species-Galapagos-Islands-home-archipelago.jpg", 
        source: "Animal Kingdom", 
        data_discovered: "Giant tortoises like Jonathan were studied, revealing lifespans exceeding 190 years.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The Great Wall of China is not visible from space with the naked eye.", 
        category: "History", 
        related_img: "https://img.jagranjosh.com/images/2023/January/2412023/fact-or-fiction-great-wall-of-china-visible-from-space.webp", 
        source: "Space Exploration", 
        data_discovered: "Debunked during space missions like Apollo, as astronauts could not see it with the naked eye.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A crocodile cannot stick its tongue out.", 
        category: "Zoology", 
        related_img: "https://i.ytimg.com/vi/hMsEKcbfwwo/maxresdefault.jpg", 
        source: "Wildlife", 
        data_discovered: "Discovered through anatomical studies showing the tongue is fixed to the roof of the mouth.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The shortest war in history lasted 38 to 45 minutes.", 
        category: "History", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEa0etD5p0YDZ7leqjDa2LRYH934DI2VIuA&s", 
        source: "Historical Records", 
        data_discovered:  "Discovered through anatomical studies showing the tongue is fixed to the roof of the mouth.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The average human body contains enough fat to make seven bars of soap.", 
        category: "Human Biology", 
        related_img: "https://tiffaniteachey.com/cdn/shop/articles/TT_3.jpg?v=1683591952", 
        source: "Medical Studies", 
        data_discovered: "Lipid studies and soap-making processes estimate human fat sufficiency for seven bars.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Elephants are the only animals that can't jump.", 
        category: "Zoology", 
        related_img: "https://thedeclarationatcoloniahigh.com/wp-content/uploads/2018/12/African_elephant_Loxodonta_africana_reaching_up_3-900x600.jpg", 
        source: "Wildlife Foundation", 
        data_discovered: "Analyzed due to elephants' unique leg structure and heavy mass making jumping impossible.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A hummingbird's heart beats up to 1,200 times per minute.", 
        category: "Ornithology", 
        related_img: "https://pbs.twimg.com/media/FnylS8fXoAI6Xb1.jpg:large", 
        source: "Birdwatching", 
        data_discovered: "Heart rate measurements during flight studies showed extremely high metabolic activity.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The inventor of the Frisbee was turned into a Frisbee.", 
        category: "Inventions", 
        related_img: "https://samedaydumpsters.us/wp-content/uploads/2019/01/Frisbee-e1565202657427-thegem-blog-timeline-large.jpg", 
        source: "History of Toys", 
        data_discovered: "Confirmed through orbital telescope imaging and modern stargazing observations.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Wombat poop is cube-shaped.", 
        category: "Zoology", 
        related_img: "https://i2.wp.com/ascienceenthusiast.com/wp-content/uploads/2018/11/71e06ffb-wombat-poop-social.jpg?w=850&ssl=1", 
        source: "Wildlife Studies", 
        data_discovered: "Analyzed by marine scientists studying starfish regeneration and their unique anatomy.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A single cloud can weigh more than a million pounds.", 
        category: "Meteorology", 
        related_img: "https://i.ytimg.com/vi/F-P7m-ZYjSw/sddefault.jpg", 
        source: "Weather Studies", 
        data_discovered: "Discovered during ocean explorations, where blue whales were tagged and tracked globally.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The longest hiccuping spree lasted 68 years.", 
        category: "Medical Records", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lMST6gwKBySU_sWBe6TCgasvARMG1TomFQ&s", 
        source: "Medical Journal", 
        data_discovered: "Confirmed by examining the contents of official treaties and ancient legal documents.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Jellyfish are 95% water.", 
        category: "Marine Biology", 
        related_img: "https://www.divescotty.com/images/social-media/jellyfish_1440.jpg", 
        source: "Marine Science", 
        data_discovered: "Established by studies of volcanic activity and the geological structure of Krakatoa.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.", 
        category: "Space", 
        related_img: "https://static.demilked.com/wp-content/uploads/2019/12/5dee05bad2520-earth-compared-to-other-objects-in-universe-17-5de7c512e1f9a__700.jpg", 
        source: "Astronomy", 
        data_discovered: "This phenomenon was first observed during controlled studies in professional archery.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The heart of a blue whale is as large as a small car.", 
        category: "Marine Biology", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtRtPuvSmJN5WfKNh7N0aH6IEyvaCGYFqSQ&s", 
        source: "Ocean Studies", 
        data_discovered: "Uncovered during paleontological studies of ancient spiders preserved in amber.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A sneeze travels about 100 miles per hour.", 
        category: "Health", 
        related_img: "https://jamaicahospital.org/newsletter/wp-content/uploads/2015/01/sneeze480536339.jpg", 
        source: "Health Science", 
        data_discovered: "Measured during medical studies on the endurance and growth rate of human hair.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Cats have five toes on their front paws, but only four toes on their back paws.", 
        category: "Zoology", 
        related_img: "https://www.catsbest.de/wp-content/uploads//Weisse-Katze-streckt-Pfote_shutterstock_743389369-1024x683.jpg", 
        source: "Pet Care", 
        data_discovered: "Supported by discoveries of metallic hydrogen under extreme pressures in laboratories.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "A teaspoon of honey represents the life work of 12 bees.", 
        category: "Beekeeping", 
        related_img: "https://theshaykhacademy.com/wp-content/uploads/2024/07/4-1.png.webp", 
        source: "Beekeeping Association", 
        data_discovered: "This unique adaptation was studied in desert foxes through ecological field research.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2025-01-28", 
        updated_at: "2025-01-28" 
    }
  
];

module.exports = {data: samleFacts};