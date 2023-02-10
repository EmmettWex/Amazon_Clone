# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Item.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('items')

    puts "Creating items..."

    Item.create!(
        [
            {
                name: 'Abyssal whip',
                price: 1309380,
                description: 'The abyssal whip is a one-handed Melee weapon which requires an Attack level of 70 to wield. The whip is among the most powerful and popular non-degradable melee weapons and is capable of attacking at the same speed of daggers and scimitars at 2.4 seconds per hit.',
                item_type: 'Weapon'
            },
            {
                name: 'Rune scimitar',
                price: 15095,
                description: 'The rune scimitar is a scimitar requiring level 40 Attack to wield. It can be created with 2 runite bars at level 90 Smithing, or dropped by various monsters such as Zamorak warriors or Fire giants. It is the second strongest scimitar available behind the Dragon scimitar, but the strongest scimitar in free-to-play. Furthermore, it is considered the strongest melee weapon in free-to-play because of its high attack speed.',
                item_type: 'Weapon'
            },
            {
                name: "Black d'hide body",
                price: 7283,
                description: 'Black dragonhide body is a part of the black dragonhide armour set. It requires at least level 70 Ranged and 40 Defence to be worn. It is the strongest standard dragonhide body and is among the most resilient armours against Magic damage. However, Blessed dragonhide armour provides higher defensive stats while maintaining the same offensive stats.',
                item_type: 'Armor'
            },
            {
                name: 'Shark',
                price: 675,
                description: 'Sharks are a popular food item in Old School RuneScape, as they are high-healing (20 Hitpoints) and can be easily caught in large amounts. Because of this sharks are widely used for player killing, general monster killing and quests.',
                item_type: 'Food'
            },
            {
                name: 'Law rune',
                price: 240,
                description: "The law rune is a rune used in all teleportation spells, including Telekinetic Grab. For non-members, the main source of law runes is from monster drops, as most monsters that drop runes may occasionally drop law runes. For members, they may be purchased in the Mage Arena or in the Wizards' Guild, requiring 66 Magic and completion of The Hand in the Sand.",
                item_type: 'Rune'
            }
        ]
    )
    puts "Done!"
end