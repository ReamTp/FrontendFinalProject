import { ProductsToPayProps } from '../../../../types/components/containers';
import { PaymentContent, PaymentTitle } from '../PaymentPageContents'
import { ProductsContent, ProductToPayContent, ProductToPayInfo, ProductToPayPrice } from './ProductsToPay.elements';

const ProductsToPay = ({products}: ProductsToPayProps) => {
    return (
        <PaymentContent>
            <PaymentTitle>Tus Productos</PaymentTitle>
            <ProductsContent>
                {products.map(product => (
                    <ProductToPayContent>
                        <ProductToPayInfo>
                            <p>{product.cantidad}c/u</p>
                            <img src={product.image} alt="img"/>
                            <h4>{product.name}</h4>
                        </ProductToPayInfo>

                        <ProductToPayPrice>S/ {product.price.toFixed(2)} c/u</ProductToPayPrice>
                    </ProductToPayContent>
                ))}
            </ProductsContent>
        </PaymentContent>
    )
}

export default ProductsToPay
