import Image from "next/image"
import NextLink from "next/link"
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"

export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
            alt="Icono de la app pokemon"
            width={70}
            height={70}
        />

        <NextLink href="/" passHref>
          <Link>
            <Text 
                // color="primary" 
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                weight="bold"
            >
                <span style={{fontSize: '26px'}}>P</span>
                <span style={{fontSize: '19px'}}>okémon</span>
            </Text>
          </Link>
        </NextLink>


        <Spacer css={{flex: 1}} />

        <NextLink href="/favorites">
          <Link> 
            <Text color="success" h3>Favoritos</Text>
          </Link>
        </NextLink>

    </div>
  )
}
