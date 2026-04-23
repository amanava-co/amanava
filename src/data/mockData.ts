// Mock data for the Amanava Dashboard

export interface Transaction {
  id: string;
  tenant_id: string;
  data_competencia: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  categoria: string;
  data_pendencia?: string;
  categoria_pendencia?: 'DRE' | 'Balanço Patrimonial' | 'Fluxo de Caixa';
  criticidade?: 'Alto' | 'Médio' | 'Baixo';
  tags: {
    cliente?: string;
    contrato?: string;
    produto?: string;
  };
  status: 'pending' | 'validated';
  audit_log?: string;
}

export const mockTransactions: Transaction[] = [
  {
    id: "tx-001",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-10",
    valor: 150000.00,
    tipo: 'receita',
    categoria: "Serviços",
    tags: {
      cliente: "TechCorp S/A",
      contrato: "CT-2025-01",
      produto: "SaaS Enterprise"
    },
    status: 'validated'
  },
  {
    id: "tx-002",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-12",
    valor: -45000.00,
    tipo: 'despesa',
    categoria: "Folha de Pagamento",
    tags: {
      cliente: "TechCorp S/A",
      contrato: "CT-2025-01",
      produto: "SaaS Enterprise"
    },
    status: 'validated'
  },
  {
    id: "tx-003",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-15",
    valor: 85000.00,
    tipo: 'receita',
    categoria: "Serviços",
    tags: {
      cliente: "Global Logistics",
      // contrato is missing to trigger HITL pending validation
    },
    status: 'pending',
    data_pendencia: '2026-04-16',
    categoria_pendencia: 'DRE',
    criticidade: 'Médio',
    audit_log: "Atenção: Recebimento de 85000.00 em 2026-04-15 está pendente de validação. Não foi possível identificar o [CONTRATO/PRODUTO] associado."
  },
  {
    id: "tx-004",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-16",
    valor: -12000.00,
    tipo: 'despesa',
    categoria: "Infraestrutura Cloud",
    tags: {
      produto: "SaaS Enterprise"
    },
    status: 'validated' // Assuming product level is enough here
  },
  {
    id: "tx-005",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-18",
    valor: -8000.00,
    tipo: 'despesa',
    // Missing category for DRE
    categoria: "Desconhecido",
    tags: {},
    status: 'pending',
    data_pendencia: '2026-04-19',
    categoria_pendencia: 'DRE',
    criticidade: 'Alto',
    audit_log: "Inconsistência Crítica: Não foi possível identificar dados fundamentais de Despesas Operacionais para o cálculo do DRE."
  },
  {
    id: "tx-006",
    tenant_id: "tenant-A",
    data_competencia: "2026-04-19",
    valor: -450.00,
    tipo: 'despesa',
    categoria: "Taxas",
    tags: {},
    status: 'pending',
    data_pendencia: "2026-04-20",
    categoria_pendencia: 'Fluxo de Caixa',
    criticidade: 'Baixo',
    audit_log: "Aviso descritivo: Lançamento complementar de baixa relevância sem tag."
  }
];

export const dreData = [
  { month: 'Jan', receita: 400000, custo: 180000, despesa: 120000, ebitda: 100000 },
  { month: 'Fev', receita: 450000, custo: 195000, despesa: 130000, ebitda: 125000 },
  { month: 'Mar', receita: 420000, custo: 190000, despesa: 130000, ebitda: 100000 },
  { month: 'Abr', receita: 510000, custo: 210000, despesa: 140000, ebitda: 160000 },
];

export const patrimonioData = [
  { category: 'Ativo Circulante', value: 850000 },
  { category: 'Ativo Não Circulante', value: 340000 },
  { category: 'Passivo Circulante', value: 290000 },
  { category: 'Passivo Não Circulante', value: 150000 },
  { category: 'Patrimônio Líquido', value: 750000 },
];

// src/mocks/users.js

export const mockUsers = [
  {
    id: "uuid-001",
    tenant_id: "tenant-amanava-001",
    name: "Ricardo",
    email: "ricardo@amanava.com",
    password: "ricardo123",
    role: "socio"
  },
  {
    id: "uuid-002",
    tenant_id: "tenant-amanava-002",
    name: "Ana",
    email: "ana@amanava.com",
    password: "ana123",
    role: "executiva"
  }
]

