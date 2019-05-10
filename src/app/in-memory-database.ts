import { Entry } from './pages/entries/shared/entry.model';
import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService  } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '24/04/2019', amout: '70,00', type: 'expense', description: 'Despesa com gás de cozinha'} as Entry,
            { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: '24/04/2019', amout: '15,00', type: 'expense', description: ''} as Entry,
            { id: 3, name: 'Salário da Empresa', categoryId: categories[3].id, category: categories[3], paid: true, date: '05/04/2019', amout: '4405,00', type: 'revenue', description: ''} as Entry,
            { id: 3, name: 'Projeto Freela', categoryId: categories[4].id, category: categories[4], paid: true, date: '10/04/2019', amout: '1250,00', type: 'revenue', description: ''} as Entry
         ];

        return { categories, entries };
    }
}