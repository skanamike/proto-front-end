import Globe from './Globe';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-semibold text-foreground">AuraChain - Supply Chain Forecasting</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col">
        <main className="flex-1 space-y-4 p-6">
          {/* First Row - Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
              </div>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
              </div>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Sales</h3>
              </div>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
              </div>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </div>
          </div>

          {/* Second Row - Global Risk Hotspots with Globe */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 lg:col-span-3 row-span-2 flex flex-col">
              {/* Globe as first child */}
              <div className="flex items-center justify-center p-6">
                <Globe size={150} />
              </div>
              
              {/* Content section */}
              <div className="flex flex-col space-y-1.5 p-6 pt-0">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Global Risk Hotspots</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring of supply chain disruptions and risk factors across major trade routes.
                </p>
              </div>
              
              {/* Risk indicators */}
              <div className="flex-1 p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Port Congestion - Shanghai</span>
                    </div>
                    <span className="text-sm text-red-600 font-medium">High Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Weather Delays - Atlantic</span>
                    </div>
                    <span className="text-sm text-yellow-600 font-medium">Medium Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Labor Strike - Los Angeles</span>
                    </div>
                    <span className="text-sm text-red-600 font-medium">High Risk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side panel */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Activity</h3>
                <p className="text-sm text-muted-foreground">Latest supply chain updates</p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Shipment Delayed</p>
                  <p className="text-muted-foreground">Container ship delayed 2 days</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Route Optimized</p>
                  <p className="text-muted-foreground">Alternative route suggested</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Risk Alert</p>
                  <p className="text-muted-foreground">New disruption detected</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;