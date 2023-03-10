import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import { useRouter } from "next/router";
import Stripe from "stripe";
import Image from "next/image";

interface ProductProps {
    products: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
    }
}

export default function Product({products}: ProductProps) {

    return (
        <ProductContainer>
            <ImageContainer>

                <Image src={products.imageUrl} width={500} height={480} alt='' />

            </ImageContainer>
            <ProductDetails>
                <h1>{ products.name }</h1>
                <span>{ products.price }</span>

                <p>{products.description}</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_NKGegtC3jTuXH5' } },
        ], 
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params.id;
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })


    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imgURL: product.images[0],
                price: new Intl.NumberFormat('pt-BR', { 
                    style: 'currency',
                    currency: 'BRL',
                }).format(0.01 * price.unit_amount!),
                description: product.description
            },
        },
        revalidate: 60 * 60 * 1
    }
}
