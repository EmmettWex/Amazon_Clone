# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create({ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Cart.destroy_all
    Item.destroy_all
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('items')
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."

    User.create!(
        name: 'Emmett Wechsler',
        email: 'emmett.wechsler11@gmail.com',
        password: 'hello123'
    )

    User.create!(
        name: 'Chloe Champken',
        email: 'chloe@email.com',
        password: 'password'
    )

    User.create!(
        name: 'Gabe Calderone',
        email: 'gabe@email.com',
        password: 'password'
    )
    
    User.create!(
        name: 'Kino Calderone',
        email: 'kino@email.com',
        password: 'password'
    )

    User.create!(
        name: 'Shawna Hartley',
        email: 'shawna@email.com',
        password: 'password'
    )

    User.create!(
        name: 'Lynsie Aragon',
        email: 'lynsie@email.com',
        password: 'password'
    )

    puts "Creating items..."

    i1 = Item.create!(
        name: 'Abyssal whip',
        price: 1309380,
        description: 'The abyssal whip is a one-handed Melee weapon which requires an Attack level of 70 to wield. The whip is among the most powerful and popular non-degradable melee weapons and is capable of attacking at the same speed of daggers and scimitars at 2.4 seconds per hit.',
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/abyssal_whip.png"
    )
    # i1.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/abyssal_whip.png"), filename: "abyssal_whip.png"})

    i2 = Item.create!(
        name: 'Rune scimitar',
        price: 15095,
        description: 'The rune scimitar is a scimitar requiring level 40 Attack to wield. It can be created with 2 runite bars at level 90 Smithing, or dropped by various monsters such as Zamorak warriors or Fire giants. It is the second strongest scimitar available behind the Dragon scimitar, but the strongest scimitar in free-to-play. Furthermore, it is considered the strongest melee weapon in free-to-play because of its high attack speed.',
        item_type: 'Weapon',
        photourl: 'https://amazonosrs-seeds.s3.amazonaws.com/rune_scimitar.png'
    )
    # i2.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/rune_scimitar.png"), filename: "rune_scimitar.png"})
    
    i3 = Item.create!(
        name: "Black d'hide body",
        price: 7283,
        description: 'Black dragonhide body is a part of the black dragonhide armour set. It requires at least level 70 Ranged and 40 Defence to be worn. It is the strongest standard dragonhide body and is among the most resilient armours against Magic damage. However, Blessed dragonhide armour provides higher defensive stats while maintaining the same offensive stats.',
        item_type: 'Armor',
        photourl: 'https://amazonosrs-seeds.s3.amazonaws.com/black_dhide_body.png'
    )
    # i3.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/black_dhide_body.png"), filename: "black_dhide_body.png"})

    i4 = Item.create!(
        name: 'Shark',
        price: 675,
        description: 'Sharks are a popular food item in Old School RuneScape, as they are high-healing (20 Hitpoints) and can be easily caught in large amounts. Because of this sharks are widely used for player killing, general monster killing and quests.',
        item_type: 'Food',
        photourl: 'https://amazonosrs-seeds.s3.amazonaws.com/shark.png'
    )
    # i4.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/shark.png"), filename: "shark.png"})

    i5 = Item.create!(
        name: 'Law rune',
        price: 240,
        description: "The law rune is a rune used in all teleportation spells, including Telekinetic Grab. For non-members, the main source of law runes is from monster drops, as most monsters that drop runes may occasionally drop law runes. For members, they may be purchased in the Mage Arena or in the Wizards' Guild, requiring 66 Magic and completion of The Hand in the Sand.",
        item_type: 'Rune',
        photourl: 'https://amazonosrs-seeds.s3.amazonaws.com/law_rune.png'
    )
    # i5.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/law_rune.png"), filename: "law_rune.png"})

    i6 = Item.create!(
        name: 'Bandos chestplate',
        price: 290010,
        description: 'The Bandos chestplate is a part of the Bandos armour set, which requires 65 Defence to wear. It is dropped by General Graardor and his bodyguards in the God Wars Dungeon. Unlike the other body armours which provide a strength bonus, the Bandos chestplate also has substantial defensive bonuses.',
        item_type: 'Armor',
        photourl: 'https://amazonosrs-seeds.s3.amazonaws.com/bandos_chestplate.png'
    )
    # i6.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/bandos_chestplate.png"), filename: "bandos_chestplate.png"})

    i7 = Item.create!(
        name: 'Magic shortbow',
        price: 813,
        description: 'The Magic shortbow is a bow that requires level 50 Ranged in order to use, and is one of the few shortbows in the game with a Special attack bar. The bow has an attack range of 7. Longrange increases attack range by 2.',
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/magic_shortbow.png"
    )
    # i7.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/magic_shortbow.png"), filename: "magic_shortbow.png"})

    i8 = Item.create!(
        name: 'Fire rune',
        price: 4,
        description: 'he fire rune is one of the four basic elemental runes. Fire runes can be created from Rune essence or Pure essence through the Runecraft skill, procured from drops by killing monsters, bought from other players, purchased from magic shops, or picked up from spawns on the ground. Fire giants are among the monsters that drop fire runes often and in large quantities.',
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/fire_rune.png"
    )
    # i8.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/fire_rune.png"), filename: "fire_rune.png"})

    i10 = Item.create!(
        name: 'Air rune',
        price: 4,
        description: 'Air runes are one of the four elemental runes in RuneScape. Players can craft air runes with a Runecraft level of 1 at the Air Altar (located south-west of Falador), granting 5 Runecraft experience per Rune essence or Pure essence used.',
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/air_rune.png"
    )
    # i10.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/air_rune.png"), filename: "air_rune.png"})

    i12 = Item.create!(
        name: 'Water rune',
        price: 5,
        description: "The Water rune is one of the 4 basic elemental runes that are used in a variety of spells. They are sold at all magic shops, including Aubury's Rune Shop and Betty's Magic Emporium. A staff of water, water battlestaff, mud battlestaff, mist battlestaff, Kodai wand, or Tome of water can be equipped to provide unlimited water runes. Water runes are used in conjunction with body runes and earth runes to cast the Confuse, Weaken, and Curse spells, often regarded as an inexpensive source of Magic experience.",
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/water_rune.png"
    )
    # i12.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/water_rune.png"), filename: "water_rune.png"})

    i13 = Item.create!(
        name: 'Earth rune',
        price: 5,
        description: 'Earth runes are runes representing Earth; hence, they are one of the four elemental runes, and also some of the most common runes in the game. They are used in all Earth elemental spells, in curse spells as well as in many Lunar spells.',
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/earth_rune.png"
    )
    # i13.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/earth_rune.png"), filename: "earth_rune.png"})

    i14 = Item.create!(
        name: 'Nature rune',
        price: 108,
        description: 'Nature runes are runes used for transmutation spells such as Low and High Alchemy and Superheat Item. They are also used for the spells Bind, Snare, and Entangle, and several spells on the Lunar and Arceuus spellbook. They can be purchased from many magic shops.',
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/nature_rune.png"
    )
    # i14.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/nature_rune.png"), filename: "nature_rune.png"})

    i15 = Item.create!(
        name: 'Death rune',
        price: 156,
        description: "Death runes are one of the runes used to cast spells in the Magic skill. They are required to cast medium-level missile spells, like Wind Blast, Water Blast, Earth Blast, and Fire Blast. Members with 65 Runecraft and who have completed Mourning's End Part II can craft death runes at the Death Altar by using pure essence on it, with each essence yielding one death rune.",
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/death_rune.png"
    )
    # i15.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/death_rune.png"), filename: "death_rune.png"})

    i16 = Item.create!(
        name: 'Blood rune',
        price: 199,
        description: "Blood runes are one of the runes used to cast spells in the Magic skill. They are used in some of the highest level spells, the lowest of which is Ruby Crossbow Bolt Enchant, and the highest is Heal Group. Blood runes are also used in charging the Scythe of Vitur, Sanguinesti staff, and soul bearer.",
        item_type: 'Rune',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/blood_rune.png"
    )
    # i16.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/blood_rune.png"), filename: "blood_rune.png"})

    i17 = Item.create!(
        name: 'Feather',
        price: 3,
        description: "Feathers are used in the Fishing and Fletching skills. In Fishing, feathers are used as lures for fly fishing. Feathers may also be used as bait for barbarian heavy-rod fishing, as a cheaper alternative to fishing bait. In Fletching, feathers are used to make arrows, darts, and bolts. Feathers cannot be noted, as they are stackable.",
        item_type: 'Miscellaneous',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/feather.png"
    )
    # i17.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/feather.png"), filename: "feather.png"})

    i18 = Item.create!(
        name: 'Raw shark',
        price: 438,
        description: "Raw sharks can be fished with a harpoon with level 76 Fishing. They require level 80 Cooking to cook into sharks and heal 20 Hitpoints each. Raw sharks can be caught at many net/harpoon fishing spots with locations including the Fishing Guild, Catherby, Burgh de Rott, Rellekka, Iorwerth Camp, Southern Hosidius, Jatizso, and Gwenith. You can also catch sharks without using a harpoon at level 96 Fishing and 76 Strength by starting the second part of barbarian fishing with Otto Godblessed.",
        item_type: 'Food',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/raw_shark.png"
    )
    # i18.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/raw_shark.png"), filename: "raw_shark.png"})

    i19 = Item.create!(
        name: 'Magic logs',
        price: 1071,
        description: "Magic logs are logs that can be acquired using the Woodcutting skill from magic trees. Cutting magic trees requires a Woodcutting level of 75 or higher and yields 250 Woodcutting experience per log cut. Due to the slow speed at which magic trees are cut at this level, it is advised that players wait until they have a Woodcutting level of at least 85 before chopping magic trees. Players can expect to gain up to 130 magic logs per hour using a dragon axe.",
        item_type: 'Miscellaneous',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/magic_logs.png"
    )
    # i19.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/magic_logs.png"), filename: "magic_logs.png"})

    i20 = Item.create!(
        name: 'Yew logs',
        price: 305,
        description: "Yew logs are logs obtained from cutting yew trees, which require at least level 60 Woodcutting for players to cut. They give 175 experience when cut with an axe. Players can burn these logs with the Firemaking skill at level 60. They give 202.5 experience when burned.",
        item_type: 'Miscellaneous',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/yew_logs.png"
    )
    # i20.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/yew_logs.png"), filename: "yew_logs.png"})

    i21 = Item.create!(
        name: 'Dragon bones',
        price: 2876,
        description: "Dragon bones are bones dropped by most adult dragons, which give 72 Prayer experience when buried.",
        item_type: 'Bone',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragon_bones.png"
    )
    # i21.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragon_bones.png"), filename: "dragon_bones.png"})

    i22 = Item.create!(
        name: "Black d'hide chaps",
        price: 5866,
        description: "Black dragonhide chaps require level 70 Ranged to equip, and, unlike the Black d'hide body, have no defence requirement.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/black_dhide_chaps.png"
    )
    # i22.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/black_dhide_chaps.png"), filename: "black_dhide_chaps.png"})

    i23 = Item.create!(
        name: 'Rune platebody',
        price: 38562,
        description: "The rune platebody is a platebody made from runite bars. It is the best platebody that players are able to smith, granting 375 experience. Making a rune platebody requires 99 Smithing, 5 runite bars, and a hammer. To wear a rune platebody, players must have completed the Dragon Slayer I quest and have 40 Defence.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/rune_platebody.png"
    )
    # i23.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/rune_platebody.png"), filename: "rune_platebody.png"})

    i24 = Item.create!(
        name: 'Granite maul',
        price: 99054,
        description: "The granite maul is a two-handed melee weapon that requires 50 Strength and Attack to wield. They are dropped by gargoyles (75 Slayer required), which are in the Slayer Tower.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/granite_maul.png"
    )
    # i24.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/granite_maul.png"), filename: "granite_maul.png"})

    i25 = Item.create!(
        name: 'Rune crossbow',
        price: 10434,
        description: "The rune crossbow is a crossbow that is stronger than the adamant crossbow but weaker than the dragon crossbow. It requires a Ranged level of 61 to wield, and can fire up to and including runite bolts. It is one handed so it can be equipped alongside a shield, such as an anti-dragon shield or god book. It has an attack range of 7 increased to 9 with longrange.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/rune_crossbow.png"
    )
    # i25.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/rune_crossbow.png"), filename: "rune_crossbow.png"})

    i26 = Item.create!(
        name: 'Dragon scimitar',
        price: 59915,
        description: "The dragon scimitar is the strongest scimitar available in Old School RuneScape. It can only be wielded by players who have 60 Attack and have completed the Monkey Madness I quest. It also shares similar bonuses with Viggora's chainmace, with the chainmace being a crush weapon rather than a slash weapon.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragon_scimitar.png"
    )
    # i26.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragon_scimitar.png"), filename: "dragon_scimitar.png"})

    i27 = Item.create!(
        name: 'Elysian spirit shield',
        price: 576533867,
        description: "The elysian spirit shield requires 75 Defence and 75 Prayer to wield. The shield is made by attaching an elysian sigil, a rare drop from the Corporeal Beast, to a blessed spirit shield at an anvil with a hammer. This process requires 90 Prayer and 85 Smithing. Players without the required skill levels to create the shield may ask Abbot Langley in the Edgeville Monastery to combine the sigil and the blessed spirit shield, for a fee of 1,500,000 coins.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/elysian_spirit_shield.png"
    )
    # i27.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/elysian_spirit_shield.png"), filename: "elysian_spirit_shield.png"})

    i28 = Item.create!(
        name: 'Dragon claws',
        price: 90483502,
        description: "Dragon claws are a pair of metallic claws made from dragon metal, obtained as a rare reward for completing a raid in the Chambers of Xeric. Equipping them requires level 60 Attack. Dragon claws are notable for their special attack, which can deal a lot of damage in quick succession.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragon_claws.png"
    )
    # i28.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragon_claws.png"), filename: "dragon_claws.png"})

    i29 = Item.create!(
        name: 'Saradomin godsword',
        price: 20323076,
        description: "The Saradomin godsword is one of the five variants of the Godsword that was fought over during the God Wars. Requiring 75 Attack to wield, it is created by adding the Saradomin hilt to a completed godsword blade. This weapon is rare as players must enter the Saradomin Encampment in the God Wars Dungeon in order to defeat Commander Zilyana, who can drop a Saradomin hilt.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/saradomin_godsword.png"
    )
    # i29.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/saradomin_godsword.png"), filename: "saradomin_godsword.png"})

    i30 = Item.create!(
        name: 'Armadyl crossbow',
        price: 38077863,
        description: "The Armadyl crossbow is a ranging weapon that requires a Ranged level of 70 to wield, and can fire up to and including dragon bolts. It is dropped only by Commander Zilyana. This item counts as an Armadyl item in the God Wars Dungeon.",
        item_type: 'Weapon',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/armadyl_crossbow.png"
    )
    # i30.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/armadyl_crossbow.png"), filename: "armadyl_crossbow.png"})

    i31 = Item.create!(
        name: 'Helm of neitiznot',
        price: 51492,
        description: "The helm of Neitiznot is a helmet awarded to players upon completing The Fremennik Isles quest and requires a Defence level of 55 to wear. While it is tradeable, players may only equip the helm if they have completed The Fremennik Isles quest.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/helm_of_neitiznot.png"
    )
    # i31.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/helm_of_neitiznot.png"), filename: "helm_of_neitiznot.png"})

    i32 = Item.create!(
        name: 'Dragonfire shield',
        price: 3119650,
        description: "A dragonfire shield is an upgraded anti-dragon shield, and one of the best shields in the game behind the elysian spirit shield and Dinh's bulwark. Equipping it requires 75 Defence and having started Dragon Slayer I. It retains the same dragonfire protection as the anti-dragon shield and it also protects against the icy breath of wyverns, like the dragonfire ward, elemental, mind, and ancient wyvern shields.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragonfire_shield.png"
    )
    # i32.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragonfire_shield.png"), filename: "dragonfire_shield.png"})

    i33 = Item.create!(
        name: 'Dragon boots',
        price: 135888,
        description: "Dragon boots are boots made of Orikalkum metal. Like most other dragon items they cannot be made using the Smithing skill. The boots require a Defence level of 60 to wear. Dragon boots are commonly used due to their strength bonus and relatively low cost. Thus, they are popular with those training the Slayer skill and player killing.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragon_boots.png"
    )
    # i33.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragon_boots.png"), filename: "dragon_boots.png"})

    i34 = Item.create!(
        name: 'Dragon full helm',
        price: 53845715,
        description: "The dragon full helm is a helmet that requires 60 Defence to equip. The dragon full helm gives better defence bonuses than its medium helm counterpart. Due to its high price, and lack of prayer or strength bonuses, it is more often used as a sign of wealth, rather than in combat.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragon_full_helm.png"
    )
    # i34.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragon_full_helm.png"), filename: "dragon_full_helm.png"})

    i35 = Item.create!(
        name: 'Rune platelegs',
        price: 37939,
        description: "Rune platelegs are platelegs made of Runite. They require level 40 Defence to wear. Rune platelegs are identical in function to the rune plateskirt, but are 1kg heavier in weight. Players may receive these from the crystal chest if they are a male character.",
        item_type: 'Armor',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/rune_platelegs.png"
    )
    # i35.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/rune_platelegs.png"), filename: "rune_platelegs.png"})

    i36 = Item.create!(
        name: 'Prayer potion',
        price: 7979,
        description: "A Prayer potion is a potion made by using snape grass on a ranarr potion (unf), requiring 38 Herblore, yielding a Prayer potion(3) and 87.5 Herblore experience. A dose of Prayer potion restores Prayer points equal to 7 + 25% of the player's current Prayer level, rounded down.",
        item_type: 'Potion',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/prayer_potion.png"
    )
    # i36.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/prayer_potion.png"), filename: "prayer_potion.png"})

    i37 = Item.create!(
        name: 'Saradomin brew',
        price: 8295,
        description: "A Saradomin brew is made by mixing toadflax and a crushed bird's nest in a vial of water, giving 180 Herblore experience. This requires level 81 Herblore. Each dose of a Saradomin brew temporarily raises Hitpoints by 15% + 2 and Defence by 20% + 2 of their base levels, both rounded down, and can boost a player's Hitpoints above their maximum Hitpoints level by up to the amount healed. It also temporarily lowers Strength, Attack, Magic and Ranged by 10% + 2 of their current levels. Players typically bring super restore potions along with Saradomin brews to offset their stat reduction effect, as one dose of super restore is enough to restore lost stats from three doses of Saradomin brew, or up to four doses of brew if the player's stats were boosted beforehand (as with a super combat potion).",
        item_type: 'Potion',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/saradomin_brew.png"
    )
    # i37.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/saradomin_brew.png"), filename: "saradomin_brew.png"})

    i38 = Item.create!(
        name: 'Super combat potion',
        price: 9885,
        description: "Super combat potions are a stat boosting potion that combines the effects of super attack, super strength, and super defence into one potion, increasing the player's Attack, Strength, and Defence level respectively by 5 + 15%, rounded down. Players can make this potion at 90 Herblore by combining the aforementioned 4-dose potions with a torstol or a torstol potion (unf).",
        item_type: 'Potion',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/super_combat_potion.png"
    )
    # i38.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/super_combat_potion.png"), filename: "super_combat_potion.png"})

    i39 = Item.create!(
        name: 'Rune arrow',
        price: 89,
        description: "Rune arrows are stronger than adamant arrows, are stackable, and can be used on any bow of yew or stronger. They can be created through the Fletching skill at level 75 by using 15 rune arrowtips on 15 headless arrows, granting 187.5 Fletching experience.",
        item_type: 'Arrow',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/rune_arrow.png"
    )
    # i39.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/rune_arrow.png"), filename: "rune_arrow.png"})

    i40 = Item.create!(
        name: 'Amethyst arrow',
        price: 215,
        description: "Amethyst arrows are arrows that can be used on any bow of magic or stronger. They are created through the Fletching skill at level 82 in sets of 15, by using 15 amethyst arrowtips on 15 headless arrows, granting 202.5 Fletching experience. Amethyst arrows have a +6 higher Ranged strength bonus than rune arrows, but they fall short in comparison to dragon arrows.",
        item_type: 'Arrow',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/amethyst_arrow.png"
    )
    # i40.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/amethyst_arrow.png"), filename: "amethyst_arrow.png"})

    i41 = Item.create!(
        name: 'Onyx bolts (e)',
        price: 8707,
        description: "Enchanted onyx bolts are rune bolts tipped with enchanted onyx. Enchanted onyx bolts have a chance of triggering the Life Leech effect. This will deal 20% extra damage (30% when under the effect of the Zaryte crossbow) and heal the attacker's Hitpoints by 25% of the total damage dealt. This does not work on the undead, as they have no 'life' to leech.",
        item_type: 'Arrow',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/onyx_bolts_e.png"
    )
    # i41.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/onyx_bolts_e.png"), filename: "onyx_bolts_e.png"})

    i42 = Item.create!(
        name: 'Dragonstone bolts (e)',
        price: 435,
        description: "Enchanted dragonstone bolts are runite bolts tipped with enchanted dragonstone. Enchanted dragonstone bolts have a 6% chance of triggering the Dragon's breath effect upon a successful hit. This inflicts a dragonfire hit against the target, causing extra damage (visible ranged level * 20%). Slightly extra damage is done if under the effect of the Zaryte crossbow (visible ranged level * 22%). If the player boosts to achieve a Ranged level of 112, the extra damage is 22.",
        item_type: 'Arrow',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/dragonstone_bolts_e.png"
    )
    # i42.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/dragonstone_bolts_e.png"), filename: "dragonstone_bolts_e.png"})

    i43 = Item.create!(
        name: 'Lobster',
        price: 182,
        description: "Lobsters are a type of crustacean that can be obtained by cooking a raw lobster on a fire or cooking range, requiring level 40 Cooking and granting 120 experience when successful. Players may burn a lobster while cooking one, resulting in a burnt lobster. The burn rate while cooking these will decrease as players reach higher Cooking levels. Players will stop burning lobsters at level 74 if using a range or a fire.",
        item_type: 'Food',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/lobster.png"
    )
    # i43.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/lobster.png"), filename: "lobster.png"})

    i44 = Item.create!(
        name: 'Summer pie',
        price: 660,
        description: "Summer pies are a type of pie that can be obtained by baking a raw summer pie (strawberry, watermelon, apple) on a cooking range, requiring level 95 Cooking and granting 260 experience when successful. Players may burn the pie while baking one, resulting in a burnt pie; the burn rate while cooking these will decrease as players reach higher Cooking levels. Even at level 99, there is still a chance to burn these, unless the player is wearing a Cooking cape.",
        item_type: 'Food',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/summer_pie.png"
    )
    # i44.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/summer_pie.png"), filename: "summer_pie.png"})

    i45 = Item.create!(
        name: 'Flax',
        price: 2,
        description: "Flax is a resource that can be picked from plants in various locations around Gielinor. Multiple can be collected from the same plant. It is used to make bow strings at a spinning wheel, requiring 10 Crafting, yielding 15 Crafting experience. Flax can also be spun via the Spin Flax Lunar spell.",
        item_type: 'Miscellaneous',
        photourl: "https://amazonosrs-seeds.s3.amazonaws.com/flax.png"
    )
    # i45.photo.attach({io: URI.open("https://amazonosrs-seeds.s3.amazonaws.com/flax.png"), filename: "flax.png"})

    puts 'Creating reviews...'

    items = Item.all
    users = User.all

    # abyssal whip reviews
    Review.create!(
        display_name: 'Emmett Wechsler',
        rating: 4,
        headline: 'Love this item',
        description: 'Fantastic attack training item, not great for strenght though.',
        author_id: User.first.id,
        item_id: items[0].id
    )

    # Review.create!(
    #     display_name: 'Chloe Champken',
    #     rating: 2,
    #     headline: 'Not what I expected',
    #     description: 'I ordered this for my partner and he tore up all our furniture playing with it',
    #     author_id: User.second.id,
    #     item_id: items[0].id
    # )

    # Review.create!(
    #     display_name: 'Gabe Calderone',
    #     rating: 5,
    #     headline: 'I love it!',
    #     description: 'I was able to max my account and this was fantastic for training attack and slayer',
    #     author_id: User.third.id,
    #     item_id: items[0].id
    # )

    # Review.create!(
    #     display_name: 'Kino Calderone',
    #     rating: 5,
    #     headline: "Great for PK'ing",
    #     description: 'This has been my primary melee weapon for pking for two years.',
    #     author_id: User.fourth.id,
    #     item_id: items[0].id
    # )

    # Review.create!(
    #     display_name: 'Shawna Hartley',
    #     rating: 1,
    #     headline: 'It destroyed my walls',
    #     description: 'I bought this to hang up in my living room and the tip of the whip scratched up my wall. I would not recommend anyone get this item.',
    #     author_id: User.fifth.id,
    #     item_id: items[0].id
    # )

    # Review.create!(
    #     display_name: 'Lynsie Aragon',
    #     rating: 3,
    #     headline: "I didn't get to use it yet",
    #     description: "I ordered this but I don't have 70 attack yet so I haven't been able to use it yet, I am excited to though.",
    #     author_id: User.sixth.id,
    #     item_id: items[0].id
    # )

    # # rune scimitar reviews
    # Review.create!(
    #     display_name: 'Zezima',
    #     rating: 5,
    #     headline: "It's a classic",
    #     description: "What a great item, it's not the best scimitar but it holds a special place in my heart",
    #     author_id: User.fourth.id,
    #     item_id: items[1].id
    # )

    # Review.create!(
    #     display_name: 'The Old Nite',
    #     rating: 5,
    #     headline: 'This is a favorite of mine',
    #     description: 'I remember when I was first leveling up how excited I was when I got to first equip this. I highly recommend for new players.',
    #     author_id: User.third.id,
    #     item_id: items[1].id
    # )

    # # black d'hide body
    # Review.create!(
    #     display_name: 'Erin',
    #     rating: 4,
    #     headline: 'It looks good but not great',
    #     description: 'I like the design, but it just isnt what it used to be since the nerf.',
    #     author_id: users[0].id,
    #     item_id: items[2].id
    # )

    # # shark
    # Review.create!(
    #     display_name: 'Connor Cassara',
    #     rating: 5,
    #     headline: 'Wooooooah nelly!',
    #     description: 'Man oh man do I love eating me some sharks! I caught em myself, I dont even buy them here. But I recommend you all get some because they are just so delicious.',
    #     author_id: users[0].id,
    #     item_id: items[3].id
    # )

    # Review.create!(
    #     display_name: 'Brotha P',
    #     rating: 5,
    #     headline: 'A must have',
    #     description: 'I use these in all of my teleport spells, I could not live without them.',
    #     author_id: users[0].id,
    #     item_id: items[4].id
    # )

    # Review.create!(
    #     display_name: 'Armadyl',
    #     rating: 1,
    #     headline: 'Bandos is a wuss',
    #     description: 'Hahahaha loser Bandos would get rekt by me any day. What a loser!!',
    #     author_id: users[0].id,
    #     item_id: items[5].id
    # )

    ## templates
    # Review.create!(
    #     display_name: '',
    #     rating: ,
    #     headline: '',
    #     description: '',
    #     author_id: ,
    #     item_id: 
    # )

    # i4 = Item.create!(
    #     name: ,
    #     price: ,
    #     description: ,
    #     item_type: ,
    #     photourl:
    # )
    # i4.photo.attach({io: URI.open(""), filename: ""})
    #

    puts "Done!"
end