let mySprite = sprites.create(img`
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    .................1111111111...............................................................
    .................121ffffff11..............................................................
    .......11111111..11222222221...........1111111111.........................................
    .......19999991..121fffffff1...........121ffffff11........................................
    .......1111111111111fffdddd1...........11222222221........................................
    ........1999911f11f1fffffff1...........121fffffff1......11111.............................
    ........1111111ff1f1fffffff1...........111ffddddd1.....119991.............................
    ..........1999111ffffffffff1............11fffffff1.....199111.............................
    ..........11111.111fffffff11..........1111fffffff1111..1111...............................
    ..............111111ffffff1..........11ff1ffffffffff11..111111............................
    ..............1ff111ffffff1..........1f1ff11fff1f11ff1..199991............................
    ..............11ffffffffff1..........11111ffffff111111..111111............................
    ...............1111fffff111..............111fff11111....111...............................
    ...............1fffff1111.................11fff11ff111..1911..............................
    ...............1111111...................11ffffff11ff1..19911.............................
    .........................................1ff1111111111..11191.............................
    .........................................1f11.............111.............................
    .........................................1f1..............................................
    .........................................111..............................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    `, SpriteKind.Player)
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
    888bbb888888888888888888888888888bbffffffffffbb88888888888888888888888888888888888888888888888888888888888888bffffb888818888888888888888888888888888881888888888
    888bfb88888888888888888888888888bbffffffffffffbb8888888888888888888888888888888888888888888888888888888888888bfeefb888888888888888888888888888888888888888888888
    88bbfbb888888888888888888888888bbffffffffffffffbb888888888888888888888888888888888888888888888888888888888888bffffb888888888888888888888888888888888888888888888
    bbbfffbb8888888888888888888888bbffffffffffffffffbb88888888888888888888888888888888888888888888888888818888888bfeefb8888888888888888888888888bbb88888888888888888
    bbff4ffbb88888888888888888888bbffffffffffffffffffbb88bbbbb8888888bbbbbb88888888888888888888888888888888888888bffffb888888888888888888188888bbfb8888888888bbbbbbb
    bfffffffbb88bbbb8888888bbbb88bffffffffffffffffffffb88bfffbbbb8888bffffb88888888888888888888888888888888888888bfeefb888888888888888888888888bffbb888888888bffffff
    fffffffffbb8bffbbbbbb8bbffb8bbffffffffffffffffffffbb8bffffffb8888bffffb888888888bbbbb888888888888888888888888bffffbbb888888888888888888888bbfffbb88888888bffffff
    ffcfffcfffb8bfffffffbbbfffbbbffffffffffffffffffffffb8bf4ff4fb8888bffffbbbbbb88bbbfffbbb8888888888888888888888bfeefffb888888888888888888888bfffffb88888888bffffff
    ffcfffcfffb8bff3f3ffbbfffffbbffffffffffffffffffffffbbbffffffb8888bfffffffffb88bfffffffb88888888888888888bbbbbbffffffbbbb88888888888888888bbfffffb88888888bffffff
    ffcfffcfffb8bff3f3ffbffffffbbffffffffffffffffffffffbfffeff9fb88bbbfffff5f5fb88bfddfccfb88888888888888888bfffbbfeeffffffb8888888188888888bbffffffbb8888888bffffff
    ffcfffcfffb8bfffffffbfffffffbffffffffffffffffffffffbfffeff9fb88bfbfffffffffbbbbfffffffbb888888888888888bbfffbbfffffffffbbbbb888888888888bffffffffbb888888bffffff
    ffcfffcfffb8bffbfbffffffffffbffffffffffffffffffffffbffffffffb88bfffffff6f7fbbfff99f66ffbbbbbb888818888bbffffbbfeeffffffbfffb888888888888bfffffffffb8bbbbbbffffff
    ffcfffcfffbbfffbfbffffffffffbffffffffffffffffffffffbffffffefb88bfffffffffffbbffffffffffbbfffb888888888bfffffbbfffffffffbfffb888888888888bfffffffffb8bfffbbffffff
    ffcfffcfffffffffffffffffffffbffffffffffffffffffffffbffffffefb88bfffffffefefbbfffbbfccfffbfffb88888888bbfffffbbfeeffffffbfffb88888888888bbfffffffffbbbfffbfffffff
    ffcfffcffffffffbf3ffffffffffbffffffffffffffffffffffbffffffffb8bbfffffffffffbbfffffffffffff3fb88888888bffffffbbfffffffffbfffb88888888888bfffffffffffbbfffffffffff
    ffcfffcffffffffbf3ffffffffffbffffffffffffffffffffffbffffffffb8bffffffff3f6fbbfff99f66fffff3fb88888888bffffffbbfeeffffffbfffbbbbbb8bbbbbbffffffffffffffffffffffff
    ffcfffcfffffffffffffffffffffbffffffffffffffffffffffbffffffffbbbffffffffffffbbfffffffffffff3fbbbbbbbbbbffffffbbfffffffffbfffbbfffb8bfffbbffffffffffffffffffffffff
    ffcfffcffffffff3fbffffffffffbffffffffffffffffffffffbffffffffbbfffffffffffffbbfff99fccfffff3fbffffffffbffffffbbfeeffffffbffffbfffbbbfffbbffffffffffffffffffffffff
    ffcfffcffffffff3fbffffffffffbffffffffffffffffffffffbffffffffbbfffffffffffffbffffffffffffffffbffffffffbffffffbbfffffffffbffffffffbbffffbbffffffffffffffffffffffff
    ffcfffcfffffffffffffffffffffbffffffffffffffffffffffbfffffffffffffffffffffffbffffbbf66fffffffbffffffffbffffffbbfeeffffffbffffffffffffffbbffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffbffffffffffffffffffffffffffffffffffffffff
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
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
music.play(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 0, 575, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C E A E B G C5 E ", 120), music.PlaybackMode.UntilDone)
controller.moveSprite(mySprite, 100, 100)
