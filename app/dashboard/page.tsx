import Sidebar from "@/components/sidebar";
import { prisma } from "@/lib/prisms";

async function DashboardPage() {
  const totalProducts = await prisma.product.count();
  console.log(totalProducts);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">
                Welcome Back! Here is an overview of your interview
              </p>
            </div>
          </div>
        </div>
        {/* Key Metrices */}
      </main>
    </div>
  );
}

export default DashboardPage;
