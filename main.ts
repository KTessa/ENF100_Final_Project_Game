namespace SpriteKind {
    export const Car = SpriteKind.create()
}

sprites.onDestroyed(SpriteKind.Projectile, function on_on_destroyed(sprite2: Sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    if (info.life() >= 0) {
        info.changeLifeBy(-1)
    }
    
})
info.onLifeZero(function on_life_zero() {
    game.gameOver(false)
})
let car2 : Sprite = null
let car1 : Sprite = null
let StrayCat : Sprite = null
let mySprite = sprites.create(img`
        ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            .........3....................
            .........333ffffff............
            ...........3333333............
            ..........33fff11f............
            .........33.ffffff............
            ............ffffff............
            ............ffffff............
            ............fffff.............
            .............fff..............
            .............fff..............
            .............fffff............
            .............fff..............
            .............fffff............
            ............ffff..............
            ............ffff..............
            ............f.................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
    `, SpriteKind.Player)
mySprite.setPosition(20, 82)
controller.moveSprite(mySprite, 100, 100)
info.setLife(3)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188
        8818888888888888888888888888888888888888881888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888881888888888888888888888888888888888888888888811111111188888888888888888888888888888818888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888111111dd11111888888888888888888888888888888888888888818888888888888888888888888881888888888888
        888888888188ddddd888888888888888888888888888888888888888888888888111bb1111d1b11188888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888ddddddbddddd888888888888888888888888888888888888888888888811bbdd11111d1b1118888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888ddddddddbbbbbddd8888888888888881888888888888888888888888888811bdd1bb111d1bdd18888888888888888888888888888888888888888888888888888888888888888888888888888888
        8881dddddddddddbdbbdd8888888888888888888888888888ddddd88888888811bdd11b111111b11d1888888888888888888888888888888888888888888888888818888888888888888888888888888
        8881888888ddbbbbbbbbbbbb888888888888888888888ddddddddbdd888888811bdd111111111b11d188888888888888188888888dddddd888888ddd8888888888888888888888888888888888888888
        8888888888888bbbbbbbbbb8888888888888888888dddddddddddbbdd8888881bdbdd1111d111b1bd188881888888888888888888ddddddd8888ddddd888888888888888881888888888888888888888
        888888888888888888888888888888888888888888dddddbbbbbddbbb8888881bd1d1111d11b111bd18888888888888888888888dddbbdddddddbbbbd888888888888888888888888888881888888888
        888888888888888888888888888888888888888888ddbbbbdddbbbddbb8d8881b11dd111d11b111bd18888888888888888888888ddddbbbdddbbbcbdd888888888888888888888888888888888888888
        888888888888888888888888888888888888888dddddddddddddbbbbdddd8881db1db111dd1b11dbd1888888888888888888888dddddbdbbdbbdddcdd888888888888888888888888888888888888888
        888888888888888188888888888888888888888888ddd8888888dddddd888881bdbdd1111d1b11d1d18888888888888888dddddcccddbbddbdddd8dddcd8888d8d888888888888888888888888888888
        88888881888888888888888888888818888888888888888888888888888888811dd1db1111111bdb1188888888888888d88ddddddcd88ddddd8888d8dcdd8d8888888888888888888888888888888888
        811888888888888888888888888888888888888888888888888888888888888111db1b1111111d1b1188888888888888888ddcd888888888888888888888888888888888888888881888888888888188
        81188888888888888888888188888888888888bbbb8888888888888888888888111d1111111dddb118888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888bbffbb888888888888888888888111d1bdddddd1dd118888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888bbffffbb888888888888888818888111bbbbbbbbdd1188888881888888888888888888888888888888888888888888888188888888888888888888888888
        88888888888888188888888888888888888bbffffffbb8888188888888888888881111bbbb11111888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888bbffffffffbb888888888888888888888811111111188888888888888888888888888888888bbbbbb888888888888888888888888888888888888888888888
        888bbb888888888888888888888888888bbff5ff5ffffbb88888888888888888888888888888888888888888888888888888888888888bffffb888818888888888888888888888888888881888888888
        888bfb88888888888888888888888888bbffffffffffffbb8888888888888888888888888888888888888888888888888888888888888bfeefb888888888888888888888888888888888888888888888
        88bbfbb888888888888888888888888bbffffffffffcfffbb888888888888888888888888888888888888888888888888888888888888bffffb888888888888888888888888888888888888888888888
        bbbfffbb8888888888888888888888bbffcff5ff5fffffffbb88888888888888888888888888888888888888888888888888818888888bfeefb8888888888888888888888888bbb88888888888888888
        bbff4ffbb88888888888888888888bbffffffcfffff5ffcffbb88bbbbb8888888bbbbbb88888888888888888888888888888888888888bffffb888888888888888888188888bbfb8888888888bbbbbbb
        bfffffffbb88bbbb8888888bbbb88bffffcfffffcfffffffffb88bfffbbbb8888bffffb88888888888888888888888888888888888888bfeefb888888888888888888888888bffbb888888888bffffff
        fffffffffbb8bffbbbbbb8bbffb8bbf5fffff5ffffffff5fcfbb8bffffffb8888bfcffb888888888bbbbb888888888888888888888888bffffbbb888888888888888888888bbfffbb88888888bf22f9f
        ffcfffcfffb8bfffffffbbbfffbbbfffff5fffff5ff5fffffffb8bf4ff4fb8888bfcffbbbbbb88bbbfffbbb8888888888888888888888bfeefffb888888888888888888888bfffffb88888888bffffff
        ffcfffcfffb8bff2f2ffbbfffffbbffcfffff5ffffffff5ffffbbbffffffb8888bfcfffffffb88bfffffffb88888888888888888bbbbbbffff7fbbbb88888888888888888bbf5f5fb88888888bf22f9f
        ffcfffcfffb8bff2f2ffbffffffbbfffffffffff5ffffffff5fbfffeff9fb88bbbfcfcf5f5fb88bfddfccfb88888888888888888bfffbbfeeffffffb8888888188888888bbff5f5fbb8888888bffffff
        ffcfffcfffb8bfffffffbfffffffbfffff5ff5fffffcffcffffbfffeff9fb88bfbfcfcfffffbbbbfffffffbb888888888888888bbfdfbbffff7ffffbbbbb888888888888bffffffffbb888888bf22f9f
        ffcfffcfffb8bffbfbffffffffffbff5ffcfffff5fffffcff5fbffffffffb88bfffcfcf6f7fbbfff99f66ffbbbbbb888818888bbffdfbbfeeffffffbfffb888888888888bfff5f5fffb8bbbbbbffffff
        ffcfffcfffbbfffbfbffffffffffbffffffffcfffff5fffffffbffffffefb88bfffcfcfffffbbffffffffffbbfffb888888888bfffffbbffff7ffffbfffb888888888888bfff5f5fffb8bfffbbf22f9f
        ffcfffcfffffffffffffffffffffbfffff5fffff5fffff5ffffbffffffefb88bfffcfcfefefbbfffbbfccfffbfffb88888888bbfdfffbbfeeffffffbfffb88888888888bbfffffffffbbbfffbfffffff
        ffcfffcffffffffbf2ffffffffffbff5fffffcfffff5fffff5fbffffffffb8bbfffcfcfffffbbfffffffffffff2fb88888888bffdfffbbffff7ffffbfffb88888888888bffff5f5ffffbbffffff22f9f
        ffcfffcffffffffbf2ffffffffffbfffffcfffff5fffff5ffffbffffffffb8bffffcfcf2f6fbbfff99f66fffff2fb88888888bffffffbbfeeffffffbfffbbbbbb8bbbbbbffff5f5fffffffffffffffff
        ffcfffcfffffffffffffffffffffbfffffcffffffff5fffff5fbffffffffbbbffffcfcfffffbbfffffffffffff2fbbbbbbbbbbffffffbbffff7ffffbfffbbfffb8bfffbbfffffffffffffffffff22f9f
        ffcfffcffffffff2fbffffffffffbff5fffff5ff5fffffcffffbffffffffbbfffffcfcf7f3fbbfff99fccfffff2fbffffffffbffffffbbfeeffffffbffffbfffbbbfffbbffff5f5fffffffffffffffff
        ffcfffcffffffff2fbffffffffffbfffff5ffffffff5fffff5fbffffffffbbfffffcfcfffffbffffffffffffffffbfddddddfbffffffbbffff7ffffbffffffffbbffffbbffff5f5ffffffffffff22f9f
        ffcfffcfffffffffffffffffffffbff5fffff5ffcfffff5ffffbfffffffffffffffcfcf4fdfbffffbbf66fffffffbffffffffbffffffbbfeeffffffbffffffffffffffbbffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffff7ffffbfffffffffffffffffffffffffffffffffff22f9f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc11cfffffffffc11cffffffffffc11cfffffffffc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
music.play(music.createSong(hex`
        00780004080200
    `), music.PlaybackMode.InBackground)
music.play(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 0, 575, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
game.setGameOverScoringType(game.ScoringType.HighScore)
music.play(music.stringPlayable("C E A E B G C5 E ", 120), music.PlaybackMode.UntilDone)
game.onUpdateInterval(12000, function on_update_interval() {
    
    for (let index = 0; index < 3; index++) {
        StrayCat = sprites.createProjectileFromSide(assets.image`
            Stray cat
        `, randint(-200, -50), 0)
        StrayCat.setPosition(124, 86)
        StrayCat.follow(mySprite)
    }
})
game.onUpdateInterval(2000, function on_update_interval2() {
    
    car1 = sprites.createProjectileFromSide(img`
            ........222222222222277.........
                    .......2f7ffff2ffffffff2........
                    ......2ff2ffff7ffffffff7........
                    ......7ff2fffff2bbffbfff2.......
                    .....7fff2fffff7ffbbfbbf7.......
                    .....7fff2ffffff2bffbffbb2......
                    ....7ffff7ffffff7bbbbbbbb7......
                    ...662227622277767777222222222..
                    ..77677776777777677722522222522.
                    ..77677776767776777725552225552.
                    .777767776777776777725552225552.
                    .7777f7776777767f77726566666562.
                    ..66f9f66666666f9f666222222222..
                    ....f9f..fff...f9f........fff...
                    .....f....f.....f..........f....
                    ................................
        `, randint(200, 50), 0)
    car1.setPosition(0, 100)
    car1.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1658, function on_update_interval3() {
    
    car2 = sprites.createProjectileFromSide(img`
            .........772222222222222........
                    ........2ffffffff2ffff7f2.......
                    ........7ffffffff7ffff2ff2......
                    .......2fffbffbb2fffff2ff7......
                    .......7fbbfbbff7fffff2fff7.....
                    ......2bbffbffb2ffffff2fff7.....
                    ......7bbbbbbbb7ffffff7ffff7....
                    ..222222222777767772226722266...
                    .22522222522777677777767777677..
                    .25552225552777767776767777677..
                    .255522255527777677777677767777.
                    .26566666562777f7677776777f7777.
                    ..222222222666f9f66666666f9f66..
                    ...fff........f9f...fff..f9f....
                    ....f..........f.....f....f.....
                    ................................
        `, randint(-200, -50), 0)
    car2.setPosition(155, 65)
    car2.setFlag(SpriteFlag.AutoDestroy, true)
})
