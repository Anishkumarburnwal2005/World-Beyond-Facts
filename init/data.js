const samleFacts = [
    {   
        fact: "The Earth is the third planet from the Sun.", 
        category: "Space", 
        related_img: "https://www.shutterstock.com/image-illustration/land-third-planet-solar-system-260nw-1457066816.jpg", 
        source: "NASA", 
        data_discovered: "Established through ancient astronomy and confirmed by modern space missions like Voyager and Apollo.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2017-01-08", 
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
        created_at: "2014-05-07", 
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
        created_at: "2013-03-27", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Bananas are berries, but strawberries are not.", 
        category: "Botany", 
        related_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy33TrzLC1i04bB_WjoGC8L2CIB1u9mIF4Q&s", 
        source: "Botanical Society", 
        data_discovered: "Defined in botany based on fruit structure and seed arrangement classifications.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2019-09-22", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The Eiffel Tower can be 15 cm taller during the summer.", 
        category: "Engineering", 
        related_img: "https://i.ytimg.com/vi/8Gvux9T6j_A/maxresdefault.jpg", 
        source: "Tourism France", 
        data_discovered: "Thermal expansion of the iron structure was observed during seasonal inspections.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2002-09-30", 
        updated_at: "2025-01-28" },
    
    { 
        fact: "Octopuses have three hearts.", 
        category: "Marine Biology", 
        related_img: "https://octonation.com/wp-content/uploads/2022/05/does-an-octopus-have-three-hearts-SFU-Science-Alive-1024x768.jpeg", 
        source: "Ocean Science", 
        data_discovered: "Marine biologists observed this during dissections and studies on octopus anatomy.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2006-02-19", 
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
        created_at: "2007-04-31", 
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
        created_at: "2001-12-15", 
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
        created_at: "2008-07-12", 
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
        created_at: "2007-03-19", 
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
        created_at: "2004-04-08", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The shortest war in history lasted 38 to 45 minutes.", 
        category: "History", 
        related_img: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/11/13/285d58142e407be5d298d7df3c15766a1731497760845614_original.png?impolicy=abp_cdn&imwidth=640", 
        source: "Historical Records", 
        data_discovered:  "Discovered through anatomical studies showing the tongue is fixed to the roof of the mouth.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2015-08-18", 
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
        created_at: "2002-06-17", 
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
        created_at: "2009-11-23", 
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
        created_at: "2012-10-10", 
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
        created_at: "1999-11-23", 
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
        created_at: "2005-03-14", 
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
        created_at: "2007-11-28", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The longest hiccuping spree lasted 68 years.", 
        category: "Medical Records", 
        related_img: "https://i.ytimg.com/vi/sIf6dAGyf50/sddefault.jpg", 
        source: "Medical Journal", 
        data_discovered: "Confirmed by examining the contents of official treaties and ancient legal documents.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2015-09-19", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "Jellyfish are 95% water.", 
        category: "Marine Biology", 
        related_img: "https://img.freepik.com/premium-photo/group-jellyfish-dark_852471-620.jpg", 
        source: "Marine Science", 
        data_discovered: "Established by studies of volcanic activity and the geological structure of Krakatoa.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2019-09-23", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.", 
        category: "Space", 
        related_img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xhdGVzdC11bml2ZXJzZS1kaXNjb3Zlcmllcy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==", 
        source: "Astronomy", 
        data_discovered: "This phenomenon was first observed during controlled studies in professional archery.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2001-04-16", 
        updated_at: "2025-01-28" 
    },
    
    { 
        fact: "The heart of a blue whale is as large as a small car.", 
        category: "Marine Biology", 
        related_img: "https://i.ytimg.com/vi/VVoKWVJYhpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASd12bbSwwLgTeVNkRdgEJ_m8dNQ", 
        source: "Ocean Studies", 
        data_discovered: "Uncovered during paleontological studies of ancient spiders preserved in amber.",
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2013-08-29", 
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
        created_at: "2004-08-18", 
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
        created_at: "2003-06-23", 
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
        created_at: "2017-05-03", 
        updated_at: "2025-01-28" 
    },

    { 
        fact: "Water can boil and freeze at the same time.", 
        category: "Physics", 
        related_img: "https://i.pinimg.com/736x/2b/22/47/2b224731690b0bf4d65eeda1055b9b50.jpg", 
        source: "Science Daily", 
        data_discovered: "This phenomenon, known as the triple point, occurs when temperature and pressure reach equilibrium.", 
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2009-07-12", 
        updated_at: "2019-07-12" 
    },
    
    { 
        fact: "Some turtles can breathe through their butts.", 
        category: "Biology", 
        related_img: "https://pangovet.com/wp-content/uploads/2024/06/Spotted-turtle_Anna-2118_Shutterstock-1024x682.jpg", 
        source: "National Geographic", 
        data_discovered: "Certain species like the Fitzroy River turtle use cloacal respiration to extract oxygen from water.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2020-03-18", 
        updated_at: "2021-03-18" 
    },
    
    { 
        fact: "A flea can jump 350 times its body length.", 
        category: "Zoology", 
        related_img: "https://facts.zone/wp-content/uploads/2015/12/115.jpg", 
        source: "Animal Science", 
        data_discovered: "Biologists discovered that fleas use a spring-like protein called resilin for high jumps.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2010-1-25", 
        updated_at: "2018-11-25" 
    },

    { 
        fact: "There is a planet where it rains molten glass sideways.", 
        category: "Astronomy", 
        related_img: "https://i.ytimg.com/vi/tZF_yEwR9A0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFRg3NfUiJ5g2-jap8nk3wXpPMeg", 
        source: "NASA", 
        data_discovered: "Exoplanet HD 189733b has extreme weather conditions with scorching temperatures and glass rain.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2000-08-05", 
        updated_at: "2020-08-05" 
    },


    

    { 
        fact: "Sloths can hold their breath longer than dolphins.", 
        category: "Zoology", 
        related_img: "https://i.ytimg.com/vi/XbPKzSrtGAQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDU-lOVFtPuY9cpCC532VvUQL2rGw", 
        source: "Wildlife Conservation", 
        data_discovered: "Sloths slow their heart rate to hold their breath for up to 40 minutes, while dolphins last about 10-15 minutes.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2016-02-28", 
        updated_at: "2019-02-28" 
    },

    { 
        fact: "There's a lake in Africa that can explode.", 
        category: "Geology", 
        related_img: "https://res.cloudinary.com/djgesv2ry/image/upload/v1723138624/0_sthg8o.jpg", 
        source: "Geological Society", 
        data_discovered: "Lake Nyos in Cameroon contains a large amount of dissolved carbon dioxide, leading to rare limnic eruptions.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2020-10-29", 
        updated_at: "2020-10-29" 
    },

    { 
        fact: "Venus is the hottest planet in the solar system.", 
        category: "Space", 
        related_img: "https://imageio.forbes.com/blogs-images/startswithabang/files/2016/06/Planets2013.svg_-1200x709.png?format=png&height=900&width=1600&fit=bounds", 
        source: "NASA", 
        data_discovered: "Despite Mercury being closer to the Sun, Venus' thick atmosphere traps heat, making it the hottest planet.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2015-09-21", 
        updated_at: "2015-09-21" 
    },


    { 
        fact: "Your bones are about five times stronger than steel.", 
        category: "Human Biology", 
        related_img: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/7de/371/6f57235231a2846a5dd484feba.jpg", 
        source: "Medical Science", 
        data_discovered: "Pound for pound, bone has a greater tensile strength than steel due to its composition of collagen and minerals.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2006-01-08", 
        updated_at: "2016-01-08" 
    },

    { 
        fact: "The smell of freshly cut grass is a plant distress signal.", 
        category: "Botany", 
        related_img: "https://theshaykhacademy.com/wp-content/uploads/2024/06/26.png.webp", 
        source: "Plant Science", 
        data_discovered: "Plants release volatile organic compounds when cut, serving as a warning signal to other plants.",
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2023-07-22", 
        updated_at: "2023-07-22" 
    },


    { 
        fact: "Cows have best friends and can become stressed when they are separated.", 
        category: "Behavior", 
        related_img: "https://theshaykhacademy.com/wp-content/uploads/2024/07/12-1-1536x1536.png.webp", 
        source: "Animal Behavior Studies", 
        data_discovered: "Researchers discovered that cows form strong social bonds with their peers.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2010-07-12", 
        updated_at: "2010-07-12"
    },

    { 
        fact: "Dolphins have names for each other and can call out to one another.", 
        category: "Communication", 
        related_img: "https://external-preview.redd.it/ZUuM5CRxCcrpid93ERgoKPN6rKzgab2U6WPJ3uiwj10.jpg?auto=webp&s=b2b261b94f3462ce776be83f36ecc3e27e995d56", 
        source: "Marine Biology", 
        data_discovered: "Scientists recorded dolphin calls and found distinct whistles that serve as names.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2011-04-19", 
        updated_at: "2011-04-19"
    },

    { 
        fact: "A group of flamingos is called a 'flamboyance'.", 
        category: "Social Structure", 
        related_img: "https://images.birdfact.com/production/colony-of-caribbean-flamingos.jpg?w=1200&h=900&q=80&auto=format&fit=crop&dm=1633126216&s=1c257c0dfdd1005728ef8b183b0f7d26", 
        source: "Ornithology", 
        data_discovered: "This term comes from the strikingly colorful appearance of flamingos in large groups.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2016-02-28", 
        updated_at: "2012-02-28"
    },

    { 
        fact: "Elephants can recognize themselves in a mirror, showing signs of self-awareness.", 
        category: "Intelligence", 
        related_img: "https://i.ytimg.com/vi/NygmdjerkLQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBxaiMaW0gPtu2e386InEEUhz8N3g", 
        source: "Cognitive Science", 
        data_discovered: "Elephants were shown to understand that the reflection in a mirror was themselves.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2003-08-16", 
        updated_at: "2013-08-16"
    },

    { 
        fact: "A single bee colony can produce up to 100 pounds of honey in a year.", 
        category: "Production", 
        related_img: "https://i.pinimg.com/474x/ba/e4/6c/bae46c5a1ee1cd8e715b18fefdfe3c72.jpg", 
        source: "Entomology", 
        data_discovered: "Researchers in apiculture tracked the amount of honey produced by colonies over time.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "1999-09-14", 
        updated_at: "2014-09-14"
    },

    { 
        fact: "Penguins mate for life and have elaborate courtship rituals.", 
        category: "Reproduction", 
        related_img: "https://i.pinimg.com/236x/4b/34/a6/4b34a6b5314e322cf2ec2029ed79cab2.jpg", 
        source: "Ornithology", 
        data_discovered: "Scientists documented courtship behaviors, including presenting pebbles as gifts.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2002-05-03", 
        updated_at: "2015-05-03"
    },

    {   
      fact: "The first computer virus was created in 1983.",
      category: "Technology", 
      related_img: "https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/468076114_18289840687236171_6394954307238873137_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5Hh_zaCI2NQQ7kNvgHInm8i&_nc_oc=Adgd2nwwl8BieguG3geJ07y9z5XTFoS4EbNoHMb7FsvA6Ny6tfT7Sh-JNZO_Y5r5ktec6F6nk7uW1onuyAWziw5v&_nc_zt=23&_nc_ht=scontent.frdp1-1.fna&_nc_gid=A40tKUnoHjzUdkAKADA3khT&oh=00_AYCTtHYi4ytsv5VRxpA_3f6L-S2l29-MOxuYCmgstKWhrg&oe=67A80CCF", 
      source: "Tech History",
      data_discovered: "The first known computer virus was 'Elk Cloner', discovered by a 15-year-old high school student named Richard Skrenta. It spread through floppy disks and was initially harmless, displaying a poem on infected systems. This virus was considered the precursor to more serious malware that would later evolve, such as worms and trojans.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2003-08-12", 
      updated_at: "2015-08-12"
  },
  
  { 
      fact: "The world’s most expensive coffee comes from civet droppings.",
      category: "Food", 
      related_img: "https://www.fodors.com/wp-content/uploads/2023/03/2-PoopCoffee-shutterstock_460718689.jpg", 
      source: "Gastronomy",
      data_discovered: "This coffee, known as Kopi Luwak, is made from beans that have been eaten and then excreted by the civet cat. The fermentation process in the animal’s digestive system imparts a unique flavor to the beans, making it highly sought after. However, the production of this coffee has raised ethical concerns, as some farms keep civets in captivity under poor conditions.",
      is_verified: true,  
      added_by: "Admin", 
      created_at: "2007-10-23", 
      updated_at: "2017-10-23"
  },
  
  { 
      fact: "Our memory is affected by smells more than any other sense.",
      category: "Psychology", 
      related_img: "https://i.ytimg.com/vi/SIT0UDTSyOw/maxresdefault.jpg", 
      source: "Psychological Studies",
      data_discovered: "Research indicates that the olfactory system, responsible for the sense of smell, is directly linked to the brain's memory center, the hippocampus. Scents can trigger vivid, emotional memories, sometimes even more effectively than sights or sounds. This phenomenon is known as the 'Proustian moment', after Marcel Proust’s famous work that describes how a smell triggered intense memories.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2016-05-09", 
      updated_at: "2016-05-09"
  },
  
  { 
      fact: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",
      category: "Architecture", 
      related_img: "https://theafricanhistory.com/wp-content/uploads/2021/03/images-95.jpeg", 
      source: "Historical Records",
      data_discovered: "The Great Pyramid was built during Egypt’s Fourth Dynasty, around 2570 BC, as a tomb for Pharaoh Khufu. It stood at 481 feet (146.6 meters), making it the tallest man-made structure on Earth until the completion of the Lincoln Cathedral in England in 1311 AD. Despite being over 4,500 years old, it remains a marvel of engineering, with precise measurements and architectural accuracy.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2014-11-01", 
      updated_at: "2014-11-01"
  },
  
  { 
      fact: "There are clouds that are actually made of ice crystals.",
      category: "Weather", 
      related_img: "https://climatekids.nasa.gov/review/cloud-formation/indian_ocean_clouds.jpg", 
      source: "Meteorology",
      data_discovered: "Cirrus clouds are a type of cloud made entirely of ice crystals. They form at high altitudes, typically above 20,000 feet (6,000 meters), where the temperatures are below freezing. These clouds appear wispy and thin, often signaling a change in weather, such as an approaching storm or a change in atmospheric pressure.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2016-12-21", 
      updated_at: "2016-12-21"
  },
  
  { 
      fact: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
      category: "History", 
      related_img: "https://qatariscoop.com/wp-content/uploads/2025/01/Cleopatra-Lived-Closer-in-Time-to-the-Moon-Landing-Than-to-the-Pyramids-1024x572.jpg", 
      source: "Historical Insights",
      data_discovered: "Cleopatra VII, the last active ruler of the Ptolemaic Kingdom of Egypt, lived between 69-30 BC. Despite her ancient rule, the time between her death and the first moon landing in 1969 is shorter than the time between her reign and the construction of the Great Pyramid, which occurred around 2,500 BC. This startling fact highlights the relative proximity of ancient Egyptian history to modern times.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2018-03-14", 
      updated_at: "2018-03-14"
  },
  
  { 
      fact: "Light from the Sun takes 8 minutes and 20 seconds to reach Earth.",
      category: "Physics", 
      related_img: "https://c02.purpledshub.com/uploads/sites/48/2023/03/how-long-light-sun-reach-earth-social.jpg?w=1200", 
      source: "Astrophysics",
      data_discovered: "In the late 1670s, Danish astronomer Ole Rømer first calculated that light travels at a finite speed by observing the motions of Jupiter’s moons. This discovery led to the understanding that sunlight travels approximately 93 million miles (150 million kilometers) to Earth in just over 8 minutes. Modern measurements have confirmed Rømer's estimate with incredible precision.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2013-07-18", 
      updated_at: "2013-07-18"
  },
  
  { 
      fact: "Jupiter’s Great Red Spot is a storm that has been raging for at least 400 years.",
      category: "Astronomy", 
      related_img: "https://i.ytimg.com/vi/O1WLJTlESW4/sddefault.jpg", 
      source: "Space Exploration",
      data_discovered: "The Great Red Spot is a massive, persistent storm on Jupiter, first observed by astronomers in 1665. It is large enough to fit three Earths inside it, and its winds can reach speeds of up to 400 miles per hour. While the storm’s exact origin is still debated, its longevity and persistence make it a unique feature in our solar system.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2019-06-10", 
      updated_at: "2019-06-10"
  },
  
  { 
      fact: "The longest novel ever written is 'In Search of Lost Time' by Marcel Proust.",
      category: "Literature", 
      related_img: "https://upload.wikimedia.org/wikipedia/commons/5/57/MS_A_la_recherche_du_temps_perdu.jpg", 
      source: "Literary Studies",
      data_discovered: "Marcel Proust’s monumental work, 'In Search of Lost Time', spans over 1.2 million words and is considered one of the longest novels ever written. It was published between 1913 and 1927, and it explores themes of memory, time, and social change in early 20th-century France. The novel is celebrated for its intricate narrative and profound psychological insights.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2015-12-01", 
      updated_at: "2015-12-01"
  },
  
  { 
      fact: "Vincent van Gogh only sold one painting during his lifetime.",
      category: "Art", 
      related_img: "https://www.gallerylafayette.com/wp-content/uploads/2020/07/the-red-vineyards-near-arles.jpg", 
      source: "Art History",
      data_discovered: "Despite creating over 2,100 works of art, including iconic paintings like 'Starry Night', Vincent van Gogh only sold one painting during his lifetime: 'The Red Vineyard'. His work was not widely recognized during his time, though it gained immense popularity after his death, making him one of the most influential artists in history.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2017-11-17", 
      updated_at: "2017-11-17"
  },
  
  { 
      fact: "The world’s largest waterfall is underwater.",
      category: "Geography", 
      related_img: "https://getting-started-blueberry-demo-bucket.s3.ap-south-1.amazonaws.com/uploads/posts/171334207996966082b9a87ca2efe594ffba05ac39098-01bf-4418-980a-343229a98069.jpg", 
      source: "Geological Surveys",
      data_discovered: "The Denmark Strait cataract, located between Greenland and Iceland, is the world's largest waterfall. Unlike traditional waterfalls, this one is submerged, as it is driven by the flow of cold water from the Arctic meeting warmer waters from the Atlantic Ocean. This unique underwater waterfall is almost four times taller than Niagara Falls.",
      is_verified: true, 
      added_by: "Admin", 
      created_at: "2020-08-13", 
      updated_at: "2020-08-13"
  },

  {   
        fact: "Some species, like birds and monarch butterflies, are able to use quantum entanglement in their eyes to navigate during migration, a phenomenon that is still being studied.", 
        category: "Quantum Biology", 
        related_img: "https://images.unsplash.com/photo-1558898478-9ac0461266c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxtb25hcmNoJTIwYnV0dGVyZmx5fGVufDB8fHx8MTYzNzc1MzMxOA&ixlib=rb-1.2.1&q=80&w=2000", 
        source: "Quantum Research", 
        data_discovered: "This discovery was made through various experiments in 2009, with the study of avian magnetoreception helping to link quantum entanglement and animal navigation.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2012-03-15", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Elephants can hear sounds in the infrasonic range (below 20 Hz), allowing them to communicate over vast distances.", 
        category: "Sound Perception", 
        related_img: "https://c02.purpledshub.com/uploads/sites/62/2024/06/African-elephant.jpeg?webp=1&w=1200", 
        source: "Wildlife Studies", 
        data_discovered: "Discovered in 2010 when researchers in Africa documented elephants responding to each other's calls from several miles away.", 
        is_verified: true,  
        added_by: "Admin", 
        created_at: "2015-07-22", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Some species of bacteria, like Deinococcus radiodurans, can survive in the extreme conditions of space, including radiation, vacuum, and extreme temperature variations.", 
        category: "Extreme Environments", 
        related_img: "https://www.frontiersin.org/files/Articles/476422/fmicb-10-02354-HTML/image_m/fmicb-10-02354-g003.jpg", 
        source: "Space Research", 
        data_discovered: "This was first observed in 2007 during space experiments to understand the possibility of microbial life on other planets.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2018-01-14", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "The deep-sea fish Photostomias lucifer uses bioluminescence to attract prey in the pitch-black depths of the ocean.", 
        category: "Bio-luminescence", 
        related_img: "https://images.stockcake.com/public/c/c/4/cc43accb-202a-4f49-8766-08ee019fd194_medium/illuminated-marine-life-stockcake.jpg", 
        source: "Marine Biology", 
        data_discovered: "In 2012, marine biologists discovered that these fish could control the intensity and pattern of their light emission to attract prey.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2017-06-09", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "The mutualistic relationship between clownfish and sea anemones benefits both: clownfish get protection from predators, while sea anemones get cleaned by the fish.", 
        category: "Symbiotic Relationships", 
        related_img: "https://www.shapeoflife.org/sites/default/files/2024-03/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg", 
        source: "Marine Ecology", 
        data_discovered: "This relationship was studied extensively by marine ecologists in 2008, who found that both species had evolved specific behaviors for this mutual benefit.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2013-10-23", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Crows are capable of using tools to extract food from difficult-to-reach places, a behavior previously thought to be unique to humans and a few other primates.", 
        category: "Animal Intelligence Beyond Humans", 
        related_img: "https://media.assettype.com/TNIE/import/2014/3/27/11/original/4BSN_07-05-2013_20_0_1.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true", 
        source: "Animal Behavior", 
        data_discovered: "In 2009, scientists observed crows in New Caledonia using sticks and leaves to craft tools, displaying intelligence on par with primates.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2014-02-17", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Dolphins have shown an ability to reorganize their brain after injury, proving that neuroplasticity is present in marine mammals as well.", 
        category: "Neuroplasticity in Animals", 
        related_img: "https://news.uchicago.edu/sites/default/files/styles/square_345/public/images/2021-08/dolphins-main.png?h=944f5cba&itok=ykkF4W5_", 
        source: "Neuroscience", 
        data_discovered: "In 2013, a study on dolphins' brain recovery after injury revealed significant changes in brain structure, proving the presence of neuroplasticity.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2016-09-01", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "A species of octopus, Octopus vulgaris, can change its skin texture to mimic rocks, coral, or even other animals, a process called adaptive camouflage.", 
        category: "Marine Biology", 
        related_img: "https://media.licdn.com/dms/image/v2/D5612AQEcoD6_7v7L5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692174288368?e=2147483647&v=beta&t=8JpoZxwUbNZc_49IXtvc_GR3Yscy1RDwzwwvM2C6csc", 
        source: "Ocean Studies", 
        data_discovered: "This was observed in 2011 when marine biologists witnessed octopuses mimicking various underwater textures to hide from predators.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2017-08-18", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Whales are known to sing songs that can be heard over hundreds of miles underwater, a form of communication and mating ritual.", 
        category: "Marine Mammals", 
        related_img: "https://i.natgeofe.com/n/976c6e74-da33-4087-8712-09dc6103077c/Whalesdiver_16x9.jpeg", 
        source: "Marine Life", 
        data_discovered: "Whale songs were first studied in the 1970s and have since been documented as a form of complex communication and social interaction.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2019-04-12", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "A sea otter's fur is so dense that it traps air, allowing them to float effortlessly and keep warm in cold waters.", 
        category: "Marine Adaptations", 
        related_img: "https://www.sciencealert.com/images/2021-12/processed/TwoSeaOttersOnTheirBacksInGlacialWaters_1024.jpg", 
        source: "Wildlife Research", 
        data_discovered: "In 2008, researchers found that otter fur contains more than 600,000 hair follicles per square inch, giving them superior buoyancy and warmth.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2020-11-30", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Male seahorses are the only species in the animal kingdom where the male carries the developing offspring in a specialized pouch.", 
        category: "Reproductive Biology", 
        related_img: "https://r2.starryai.com/results/1019541736/3d539428-8ba6-4df7-8d14-6c48cdf2916d.webp", 
        source: "Marine Biology", 
        data_discovered: "This unique behavior was first documented in the 1970s and has since been studied for its implications on reproductive evolution.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2015-01-20", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Bats are the only mammals capable of sustained flight, with some species flying at speeds of over 100 miles per hour.", 
        category: "Mammal Flight", 
        related_img: "https://www.berrypatchfarms.net/wp-content/uploads/2024/05/what-is-the-only-mammal-capable-of-true-flight.webp", 
        source: "Zoology", 
        data_discovered: "This was first observed in 2012 when biologists used high-speed cameras to study the flight dynamics of bats in various environments.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2014-05-08", 
        updated_at: "2025-02-04" 
    },
    
    { 
        fact: "Cuttlefish have three hearts: one for pumping blood to the rest of the body and two to pump blood to the gills.", 
        category: "Cephalopods", 
        related_img: "https://www.pitara.com/media/cuttlefish.jpg", 
        source: "Marine Life", 
        data_discovered: "This was documented in 2010 by marine biologists during dissections of cuttlefish to study their unique circulatory system.", 
        is_verified: true, 
        added_by: "Admin", 
        created_at: "2016-12-04", 
        updated_at: "2025-02-04" 
    }

];

module.exports = {data: samleFacts};