// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`19000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000010001000000000000010000000000000001000000000000000000000101000000000100000100000000000000010000000001000000000001000000000000000001000000040000000001000000000001000000000100010001000000010100000000000000000101000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020203030303030303`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . 2 . . . . . . . 2 . . 
. . . . . . . . 2 2 . . . . 2 . . 2 . . . . . . . 
2 . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . . 2 . 2 . 2 . . . 2 2 
. . . . . . . . 2 2 . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
