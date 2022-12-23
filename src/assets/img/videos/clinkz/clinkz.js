{
    "id": 56,
    "name": "npc_dota_hero_clinkz",
    "order_id": 68,
    "name_loc": "Clinkz",
    "bio_loc": "At the base of the Bleeding Hills stretches a thousand-league wood, a place called The Hoven, where black pools gather the tarry blood of the uplands, and the king-mage Sutherex sits in benevolent rule. Once a sworn protector of the Hoven lands, Clinkz earned a reputation for his skill with a bow. In the three-hundredth year of the king-mage, the demon Maraxiform rose from sixth hell to lay claim to the forest. In response, the king-mage decreed an unbreakable spell: to any who slew the demon would be granted Life Without End.\r\n\t\t\t\t<br><br>Unaware of the spell, Clinkz waded into battle, defending his lands against the demon's fiery onslaught. Clinkz drove Maraxiform back to the gates of sixth-hell itself, where on that fiery threshold the two locked in a mortal conflict. Grievously wounded, the demon let out a blast of hellfire as Clinkz loosed his final arrow. The arrow struck the demon true as hellfire poured out across the land, lighting the black pools and burning Clinkz alive at the instant of the demon's death. Thus, the mage's spell took effect at the very moment of the archer's conflagration, preserving him in this unholy state, leaving him a being of bones and rage, caught in the very act of dying, carrying hell's breath with him on his journey into eternity.",
    "hype_loc": "When Clinkz stalks <b>invisibly</b> through the battlefield, none are safe from ambush. <b>Swift of foot and arrow</b>, he rains fiery death upon his foes, calling upon an army of blazing compatriots to <b>bolster his assault.</b>",
    "npe_desc_loc": "Stalks invisibly to ambush lone enemies",
    "str_base": 16,
    "str_gain": 2,
    "agi_base": 22,
    "agi_gain": 2.5,
    "int_base": 18,
    "int_gain": 2.2,
    "primary_attr": 1,
    "complexity": 2,
    "attack_capability": 2,
    "role_levels": [
        2,
        0,
        0,
        0,
        0,
        0,
        3,
        1,
        0
    ],
    "damage_min": 37,
    "damage_max": 43,
    "attack_rate": 1.7,
    "attack_range": 600,
    "projectile_speed": 900,
    "armor": 3.6666667,
    "magic_resistance": 25,
    "movement_speed": 290,
    "turn_rate": 0.6,
    "sight_range_day": 1800,
    "sight_range_night": 800,
    "max_health": 520,
    "health_regen": 1.85,
    "max_mana": 291,
    "mana_regen": 0.90000004,
    "abilities": [
        {
            "id": 5259,
            "name": "clinkz_strafe",
            "name_loc": "Burning Barrage",
            "desc_loc": "CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers.",
            "lore_loc": "It's hard to say whether the blur around the Bone Fletcher is from his flaming heart or his speed with the quiver.",
            "notes_loc": [
                "Bonus Attack Range increases the length of Burning Barrage."
            ],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 0,
            "behavior": "1040",
            "target_team": 2,
            "target_type": 19,
            "flags": 0,
            "damage": 1,
            "immunity": 3,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0.2
            ],
            "channel_times": [
                2
            ],
            "cooldowns": [
                30,
                26,
                22,
                18
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                45,
                60,
                75,
                90
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "wave_count",
                    "values_float": [
                        6
                    ],
                    "is_percentage": false,
                    "heading_loc": "ARROWS FIRED:",
                    "bonuses": []
                },
                {
                    "name": "range",
                    "values_float": [
                        750,
                        800,
                        850,
                        900
                    ],
                    "is_percentage": false,
                    "heading_loc": "RANGE:",
                    "bonuses": []
                },
                {
                    "name": "damage_pct",
                    "values_float": [
                        50,
                        55,
                        60,
                        65
                    ],
                    "is_percentage": true,
                    "heading_loc": "DAMAGE PER ARROW:",
                    "bonuses": [
                        {
                            "name": "special_bonus_unique_clinkz_4",
                            "value": 25,
                            "operation": 0
                        }
                    ]
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        2
                    ],
                    "is_percentage": false,
                    "heading_loc": "CHANNEL TIME:",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0.2
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        45,
                        60,
                        75,
                        90
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        30,
                        26,
                        22,
                        18
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 5260,
            "name": "clinkz_searing_arrows",
            "name_loc": "Searing Arrows",
            "desc_loc": "Imbues Clinkz's arrows with fire for extra damage.",
            "lore_loc": "Clinkz simply lights his arrows from his flaming essence for quite the destructive effect.",
            "notes_loc": [
                "Searing Arrows deal damage to structures.",
                "The damage is directly added to Clinkz' attack damage, as physical damage."
            ],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 0,
            "behavior": "135176",
            "target_team": 2,
            "target_type": 23,
            "flags": 16,
            "damage": 1,
            "immunity": 3,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                600
            ],
            "cast_points": [
                0,
                0,
                0,
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0,
                0,
                0,
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                10
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "damage_bonus",
                    "values_float": [
                        24,
                        36,
                        48,
                        60
                    ],
                    "is_percentage": false,
                    "heading_loc": "BONUS DAMAGE:",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        600
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        10
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 5261,
            "name": "clinkz_wind_walk",
            "name_loc": "Skeleton Walk",
            "desc_loc": "Clinkz moves invisibly through units until the moment he attacks or uses items.",
            "lore_loc": "With a burst of fire and puff of smoke, the Bone Fletcher was nowhere to be seen.",
            "notes_loc": [
                "Has a fadetime of %fade_time% seconds."
            ],
            "shard_loc": "Leaving Skeleton Walk creates %shard_skeleton_count% Burning Army Skeletons.",
            "scepter_loc": "",
            "type": 0,
            "behavior": "4196356",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 3,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0,
                0,
                0,
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                20,
                19,
                18,
                17
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                80
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "duration",
                    "values_float": [
                        25,
                        30,
                        35,
                        40
                    ],
                    "is_percentage": false,
                    "heading_loc": "DURATION:",
                    "bonuses": []
                },
                {
                    "name": "fade_time",
                    "values_float": [
                        0.6
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "move_speed_bonus_pct",
                    "values_float": [
                        15,
                        30,
                        45,
                        60
                    ],
                    "is_percentage": true,
                    "heading_loc": "BONUS MOVEMENT SPEED:",
                    "bonuses": []
                },
                {
                    "name": "shard_skeleton_count",
                    "values_float": [
                        2
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        80
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        20,
                        19,
                        18,
                        17
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": true,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 7319,
            "name": "clinkz_burning_army",
            "name_loc": "Burning Army",
            "desc_loc": "Vector Targeted. Clinkz summons an army of fiery ranged skeleton archers. Archers are immobile and die with 2 attacks from a hero. Skeletons deal a percentage of Clinkz' damage, use his current Searing Arrows ability and attack only heroes. Attack range is equal to Clinkz's attack range.",
            "lore_loc": "Existing on the brink of life and death, Clinkz has learned to temporarily bridge the gap between the two.",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 0,
            "behavior": "9663676433",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 1,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 1,
            "cast_ranges": [
                1200
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                80
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                150
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "range",
                    "values_float": [
                        1300
                    ],
                    "is_percentage": false,
                    "heading_loc": "RANGE:",
                    "bonuses": []
                },
                {
                    "name": "duration",
                    "values_float": [
                        30
                    ],
                    "is_percentage": false,
                    "heading_loc": "DURATION:",
                    "bonuses": []
                },
                {
                    "name": "count",
                    "values_float": [
                        5
                    ],
                    "is_percentage": false,
                    "heading_loc": "COUNT:",
                    "bonuses": []
                },
                {
                    "name": "attack_rate",
                    "values_float": [
                        1.6
                    ],
                    "is_percentage": false,
                    "heading_loc": "ATTACK RATE:",
                    "bonuses": []
                },
                {
                    "name": "damage_percent",
                    "values_float": [
                        30
                    ],
                    "is_percentage": true,
                    "heading_loc": "DAMAGE:",
                    "bonuses": []
                },
                {
                    "name": "spawn_interval",
                    "values_float": [
                        0.5
                    ],
                    "is_percentage": false,
                    "heading_loc": "SPAWN INTERVAL:",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        1200
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        150
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        80
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": true,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": true,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 5262,
            "name": "clinkz_death_pact",
            "name_loc": "Death Pact",
            "desc_loc": "Clinkz consumes the target enemy creep or friendly creep, gaining max health and damage based on its maximum health. Does not take Clinkz out of Skeleton Walk.",
            "lore_loc": "Sutherex' bond of life and death has become a part of Clinkz, and his old bones are refreshed with repetition of the pact on lesser beings.",
            "notes_loc": [
                "If the target is an enemy, Clinkz will gain the correct experience and gold.",
                "Increases Clinkz' current and max HP.",
                "When the duration ends, max HP returns to normal, but current HP stays the same."
            ],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 1,
            "behavior": "33554440",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 3,
            "max_level": 3,
            "cast_ranges": [
                900
            ],
            "cast_points": [
                0.2
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                80,
                70,
                60
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                100
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "duration",
                    "values_float": [
                        65
                    ],
                    "is_percentage": false,
                    "heading_loc": "DURATION:",
                    "bonuses": []
                },
                {
                    "name": "health_gain_pct",
                    "values_float": [
                        30,
                        55,
                        80
                    ],
                    "is_percentage": true,
                    "heading_loc": "BONUS HEALTH:",
                    "bonuses": []
                },
                {
                    "name": "damage_gain_pct",
                    "values_float": [
                        4,
                        8,
                        12
                    ],
                    "is_percentage": true,
                    "heading_loc": "BONUS DAMAGE:",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        900
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0.2
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        100
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        80,
                        70,
                        60
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        }
    ],
    "talents": [
        {
            "id": 6104,
            "name": "special_bonus_unique_clinkz_1",
            "name_loc": "+{s:value} Searing Arrows Damage",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        20
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 523,
            "name": "special_bonus_unique_clinkz_10",
            "name_loc": "-{s:value}s Skeleton Walk Cooldown",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        3
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 495,
            "name": "special_bonus_unique_clinkz_8",
            "name_loc": "+{s:value}% Death Pact Health",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        20
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "value2",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 6231,
            "name": "special_bonus_unique_clinkz_2",
            "name_loc": "Death Pact Steal creep abilities",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [
                "Only steals the first ability"
            ],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        3
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 5944,
            "name": "special_bonus_attack_range_125",
            "name_loc": "+{s:value} Attack Range",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        125
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 617,
            "name": "special_bonus_unique_clinkz_12",
            "name_loc": "+{s:value} Burning Barrage arrows",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        3
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 7878,
            "name": "special_bonus_unique_clinkz_4",
            "name_loc": "+{s:bonus_damage_pct}% Burning Barrage Damage",
            "desc_loc": "",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        },
        {
            "id": 6620,
            "name": "special_bonus_unique_clinkz_3",
            "name_loc": "Searing Arrows Multishot",
            "desc_loc": "When using Searing Arrows, a second Searing Arrow targets a random enemy within the spell's range.",
            "lore_loc": "",
            "notes_loc": [],
            "shard_loc": "",
            "scepter_loc": "",
            "type": 2,
            "behavior": "2",
            "target_team": 0,
            "target_type": 0,
            "flags": 0,
            "damage": 0,
            "immunity": 0,
            "dispellable": 0,
            "max_level": 4,
            "cast_ranges": [
                0
            ],
            "cast_points": [
                0
            ],
            "channel_times": [
                0
            ],
            "cooldowns": [
                0
            ],
            "durations": [
                0
            ],
            "damages": [
                0,
                0,
                0,
                0
            ],
            "mana_costs": [
                0
            ],
            "gold_costs": [],
            "special_values": [
                {
                    "name": "value",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastRange",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChannelTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityDuration",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCastPoint",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCharges",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityChargeRestoreTime",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityManaCost",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                },
                {
                    "name": "AbilityCooldown",
                    "values_float": [
                        0
                    ],
                    "is_percentage": false,
                    "heading_loc": "",
                    "bonuses": []
                }
            ],
            "is_item": false,
            "ability_has_scepter": false,
            "ability_has_shard": false,
            "ability_is_granted_by_scepter": false,
            "ability_is_granted_by_shard": false,
            "item_cost": 0,
            "item_initial_charges": 0,
            "item_neutral_tier": 4294967295,
            "item_stock_max": 0,
            "item_stock_time": 0,
            "item_quality": 0
        }
    ]
}