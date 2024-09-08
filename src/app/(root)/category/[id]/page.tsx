import { Catalog } from "@/components/ui/catalog/Catalog"
import { categoryService } from "@/services/category.service"
import { productService } from "@/services/product.service"

export const revalidate = 60

const getProducts = async (params: {id: string}) => {
    const products = await productService.getByCategory(params.id)

    const category = await categoryService.getById(params.id)
}

const CategoryPage = async () => {
	return <div className='my-6'>
        <Catalog />
    </div>
}

export default CategoryPage
