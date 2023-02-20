import { styled } from ".."
import Link from "next/link";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) /2 ))', // calculo para que haja apenas uma borda que ficara na esquerda
    // neste calculo foi pego o tamanho inteiro da tela, menos o tamanho inteiro da tela - 1180 que foi o tamanho
    // estipulado para o elelemnto no app, devivdido por doi pois eles estavam com uma borda de cada lado
    // então para que a borda esquerda ficasse com o tamanho certo precisou divir para saber o tamanho que seria 
    // apaenas uma borda
    marginLeft: 'auto',
    minHeight: 656,
})

export const Products = styled(Link, {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    //padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transform: 'translateY(110%)', // para que o preço saia da tela 
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        'strong': {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1, // trazendo o preço para tela no hover
        }
    }
});