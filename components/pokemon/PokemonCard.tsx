import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({pokemon}) => {

    const {name, id, img} = pokemon;

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`)
    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card 
            isPressable 
            isHoverable
            onClick={onClick}
        >
            <Card.Body css={{p: 1}}>
                <Card.Image 
                    src={img}
                    width='100%'
                    height={140}
                />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                <Text b transform='capitalize'>{name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    #{id}
                </Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
