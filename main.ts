controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        music.jumpUp.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.destroy(effects.spray, 500)
    scene.cameraShake(4, 500)
    music.baDing.play()
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Shark Dodger")
tiles.setTilemap(tilemap`level6`)
mySprite = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . . c f e e e d d c c c c c 
    . . . . . f f e e e d d d d f . 
    . . . . f e e e e f f f f f . . 
    f f . f e e e e e e f f . . . . 
    f e . f e e f e e f e e f . . . 
    f e . f e e e f e e f e e f . . 
    f e f f e f b b f b d f d b f . 
    f f f f e b d d f d d f d d f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
info.setLife(3)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `, randint(-110, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
