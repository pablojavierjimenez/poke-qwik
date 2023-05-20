import { component$ } from "@builder.io/qwik";

interface PokemonBgImg {
    id: number;
    bright: number | 1 | 0;
    backImage?: boolean;
}

/**
 * @property {number} id 
 * @property {number | 1 | 0} bright 
 * @property {boolean} [backImage] 
 * @example <PokemonBgImg id={13} bright={0} backImage={true} />
 */
export const PokemonBgImg = component$(({ id, bright, backImage = true }: PokemonBgImg) => {

    return (
        <>

            <div class="flex items-center justify-center">
                <div
                    class="bg-center bg-cover"
                    style={`
                    background-image: url(
                    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(!backImage) ? 'back/' : ''}${id}.png);
                    background-position: center 135px;
                    background-size: 247px;
                    width: 225px;
                    height: 216px;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    border: 1px solid;
                    padding: 1px;
                    filter: brightness(${bright});`}>
                </div>
            </div>
        </>
    )
})