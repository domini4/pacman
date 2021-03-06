enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Scared
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function clydeStuck () {
    if (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) == 0 && sprites.heading(Clyde) == 270) {
        Clyde.setVelocity(50, 0)
    } else if (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) == 15 && sprites.heading(Clyde) == 90) {
        Clyde.setVelocity(-50, 0)
    }
}
function animatePacman () {
    animation.runImageAnimation(
    Pacman,
    [img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
}
function clydeVelocity (num: number) {
    if (num == 0) {
        Clyde.setVelocity(0, -50)
    } else if (num == 90) {
        Clyde.setVelocity(50, 0)
    } else if (num == 180) {
        Clyde.setVelocity(0, 50)
    } else if (num == 270) {
        Clyde.setVelocity(-50, 0)
    }
    if (ScaredGhost == 1) {
        Clyde.setVelocity(Clyde.vx * 0.5, Clyde.vy * 0.5)
    }
}
function clydeCollision () {
    ClydePossibleDirections = []
    ClydeDistanceToGo = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))) {
        ClydePossibleDirections.push(sprites.heading(Clyde))
        if (ClydeChase == 1) {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))))
        } else {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(tiles.getTileLocation(1, 1)), scene.getTileRowCoordinate(tiles.getTileLocation(1, 1)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))))
        }
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))) {
        ClydePossibleDirections.push(Math.mod(sprites.heading(Clyde) - 90, 360))
        if (ClydeChase == 1) {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))))
        } else {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(tiles.getTileLocation(1, 1)), scene.getTileRowCoordinate(tiles.getTileLocation(1, 1)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))))
        }
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))) {
        ClydePossibleDirections.push(Math.mod(sprites.heading(Clyde) + 90, 360))
        if (ClydeChase == 1) {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))))
        } else {
            ClydeDistanceToGo.push(clydeChaseDistance(scene.getTileColCoordinate(tiles.getTileLocation(1, 1)), scene.getTileRowCoordinate(tiles.getTileLocation(1, 1)), scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)), scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))))
        }
    }
    ClydeNewHeading = clydeSmallestDistance()
clydeVelocity(ClydePossibleDirections[ClydeNewHeading])
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    music.powerUp.play()
    info.changeScoreBy(10)
    Pellet_Count += -1
    ScaredGhost = 1
    animation.setAction(Clyde, ActionKind.Scared)
    info.startCountdown(30)
})
function animateClyde () {
    animWalkClyde = animation.createAnimation(ActionKind.Walking, 150)
    animation.attachAnimation(Clyde, animWalkClyde)
    animWalkClyde.addAnimationFrame(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
4 . . . 4 . . . . 4 . . . 4 . . 
`)
    animWalkClyde.addAnimationFrame(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 1 8 8 1 4 4 1 8 8 1 . . . 
. 4 4 1 8 8 1 4 4 1 8 8 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 . . 4 4 4 4 . 4 4 4 . . 4 . . 
. . . . 4 4 . . . 4 . . . . . . 
`)
    animWalkClyde.addAnimationFrame(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 1 1 8 8 4 4 1 1 8 8 . . . 
. 4 4 1 1 8 8 4 4 1 1 8 8 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
4 . . . 4 . . . . 4 . . . 4 . . 
`)
    animWalkClyde.addAnimationFrame(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 1 8 8 1 4 4 1 8 8 1 . . . 
. 4 4 1 8 8 1 4 4 1 8 8 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 . . 4 4 4 4 . 4 4 4 . . 4 . . 
. . . . 4 4 . . . 4 . . . . . . 
`)
    animWalkClyde.addAnimationFrame(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
4 . . . 4 . . . . 4 . . . 4 . . 
`)
    animScaredClyde = animation.createAnimation(ActionKind.Scared, 150)
    animation.attachAnimation(Clyde, animScaredClyde)
    animScaredClyde.addAnimationFrame(img`
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 1 1 8 8 8 8 1 1 8 . . . 
. 8 8 1 1 1 1 8 8 1 1 1 1 . . . 
. 8 8 d d 1 1 8 8 d d 1 1 . . . 
. 8 8 d d 1 1 8 8 d d 1 1 8 . . 
8 8 8 8 1 1 8 8 8 8 1 1 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 d d 8 8 d d 8 8 d d 8 8 d . . 
d 8 8 d d 8 8 d d 8 8 d d 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 . 8 8 8 . . 8 8 8 . 8 8 . . 
8 . . . 8 . . . . 8 . . . 8 . . 
`)
    animScaredClyde.addAnimationFrame(img`
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 1 1 8 8 8 8 1 1 8 . . . 
. 8 8 1 1 1 1 8 8 1 1 1 1 . . . 
. 8 8 1 d d 1 8 8 1 d d 1 . . . 
. 8 8 1 d d 1 8 8 1 d d 1 8 . . 
8 8 8 8 1 1 8 8 8 8 1 1 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 d d 8 8 d d 8 8 d d 8 8 . . 
d d 8 8 d d 8 8 d d 8 8 d d . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 . . 8 8 8 8 . 8 8 8 . . 8 . . 
. . . . 8 8 . . . 8 . . . . . . 
`)
    animScaredClyde.addAnimationFrame(img`
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 1 1 8 8 8 8 1 1 8 . . . 
. 8 8 1 1 1 1 8 8 1 1 1 1 . . . 
. 8 8 1 1 d d 8 8 1 1 d d . . . 
. 8 8 1 1 d d 8 8 1 1 d d 8 . . 
8 8 8 8 1 1 8 8 8 8 1 1 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
d 8 8 d d 8 8 d d 8 8 d d 8 . . 
8 d d 8 8 d d 8 8 d d 8 8 d . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 . 8 8 8 . . 8 8 8 . 8 8 . . 
8 . . . 8 . . . . 8 . . . 8 . . 
`)
    animScaredClyde.addAnimationFrame(img`
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 1 1 8 8 8 8 1 1 8 . . . 
. 8 8 1 1 1 1 8 8 1 1 1 1 . . . 
. 8 8 1 d d 1 8 8 1 d d 1 . . . 
. 8 8 1 d d 1 8 8 1 d d 1 8 . . 
8 8 8 8 1 1 8 8 8 8 1 1 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 d d 8 8 d d 8 8 d d 8 8 . . 
d d 8 8 d d 8 8 d d 8 8 d d . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 . . 8 8 8 8 . 8 8 8 . . 8 . . 
. . . . 8 8 . . . 8 . . . . . . 
`)
    animScaredClyde.addAnimationFrame(img`
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 1 1 8 8 8 8 1 1 8 . . . 
. 8 8 1 1 1 1 8 8 1 1 1 1 . . . 
. 8 8 d d 1 1 8 8 d d 1 1 . . . 
. 8 8 d d 1 1 8 8 d d 1 1 8 . . 
8 8 8 8 1 1 8 8 8 8 1 1 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 d d 8 8 d d 8 8 d d 8 8 d . . 
d 8 8 d d 8 8 d d 8 8 d d 8 . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
8 8 . 8 8 8 . . 8 8 8 . 8 8 . . 
8 . . . 8 . . . . 8 . . . 8 . . 
`)
}
function clydeMovement () {
    if (scene.spriteContainedWithinTile(Clyde) && (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) != ClydePrevCol || scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde)) != ClydePrevRow)) {
        clydeCollision()
        ClydePrevCol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
        ClydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
    }
    clydeStuck()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (ScaredGhost == 0) {
        music.wawawawaa.play()
        info.changeLifeBy(-1)
        tiles.placeOnTile(Pacman, tiles.getTileLocation(4, 2))
        tiles.placeOnTile(Clyde, tiles.getTileLocation(4, 5))
    } else {
        info.changeScoreBy(100)
        music.powerUp.play()
        tiles.placeOnTile(Clyde, tiles.getTileLocation(4, 5))
    }
})
info.onCountdownEnd(function () {
    ScaredGhost = 0
    animation.setAction(Clyde, ActionKind.Walking)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    music.pewPew.play()
    info.changeScoreBy(1)
    Pellet_Count += -1
})
game.onGameUpdateWithHeading(function () {
    controller.moveSprite(Pacman, 50, 50)
    scene.cameraFollowSprite(Pacman)
    if (Math.mod(game.runtime() / 1000, 60) < 30 || ScaredGhost == 1) {
        ClydeChase = 0
    } else {
        ClydeChase = 1
    }
    if (Pacman.x == 7 && controller.left.isPressed()) {
        Pacman.x = 249
    } else if (Pacman.x == 249 && controller.right.isPressed()) {
        Pacman.x = 7
    }
    if (scene.spriteContainedWithinTile(Clyde)) {
        clydeMovement()
    }
})
let animScaredClyde: animation.Animation = null
let animWalkClyde: animation.Animation = null
let ClydePossibleDirections: number[] = []
let ScaredGhost = 0
let ClydeChase = 0
let ClydePrevCol = 0
let ClydePrevRow = 0
let Pacman: Sprite = null
let Clyde: Sprite = null
let ClydeDistanceToGo: number[] = []
let ClydeNewHeading = 0
let ClydeMultipleShortPaths: number[] = []
let SmallestDistance = 0
function clydeChaseDistance (PacmanCol: number, PacmanRow: number, ClydeNextCol: number, ClydeNextRow: number) {
    return (PacmanCol - ClydeNextCol) * (PacmanCol - ClydeNextCol) + (PacmanRow - ClydeNextRow) * (PacmanRow - ClydeNextRow)
}
function clydeSmallestDistance () {
    ClydeMultipleShortPaths = []
    SmallestDistance = ClydeDistanceToGo[0]
    for (let index = 0; index <= ClydeDistanceToGo.length - 1; index++) {
        if (ClydeDistanceToGo[index] < SmallestDistance) {
            SmallestDistance = ClydeDistanceToGo[index]
        }
    }
    for (let index2 = 0; index2 <= ClydeDistanceToGo.length - 1; index2++) {
        if (ClydeDistanceToGo[index2] == SmallestDistance) {
            ClydeMultipleShortPaths.push(index2)
        }
    }
    if (ClydeMultipleShortPaths.length > 1) {
        return arrays.choose(ClydeMultipleShortPaths)
    } else {
        return ClydeDistanceToGo.indexOf(SmallestDistance)
    }
}
music.setVolume(20)
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010302020202020202020202020203010102010102010201010201020101020101020202020102010102010202020201010201010201020101020102010102010102020202020202020202020202020101010101020101010101010201010101020202020201000000000102020202020101010102010101010101020101010101020202020202020202020202020201010201010201020101020102010102010102020202020202020200020202020101020101020102010102010201010201010201010201020101020102010102010103020202020202020202020202030101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 . 2 2 . 2 . 2 2 . 2 
2 . . . . 2 . 2 2 . 2 . . . . 2 
2 . 2 2 . 2 . 2 2 . 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
. . . . . 2 . . . . 2 . . . . . 
2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 . 2 2 . 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 . 2 2 . 2 . 2 2 . 2 
2 . 2 2 . 2 . 2 2 . 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
Pacman = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(Pacman, tiles.getTileLocation(4, 2))
let Pellet_Count = tiles.getTilesByType(myTiles.tile2).length + tiles.getTilesByType(myTiles.tile3).length
animatePacman()
Clyde = sprites.create(img`
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 . . 4 4 4 . 4 4 . . 
4 . 4 . 4 . . . . 4 . . . 4 . . 
`, SpriteKind.Enemy)
tiles.placeOnTile(Clyde, tiles.getTileLocation(4, 5))
Clyde.setVelocity(-50, 0)
ClydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
ClydePrevCol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
animateClyde()
ClydeChase = 0
animation.setAction(Clyde, ActionKind.Walking)
info.setLife(3)
ScaredGhost = 0
game.onUpdateInterval(500, function () {
    if (Pellet_Count == 0) {
        game.over(true, effects.confetti)
    }
})
