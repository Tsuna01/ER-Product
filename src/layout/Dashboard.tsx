
function Dashboard() {
  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const { currentUser, logout } = useAuth();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3030/data', {
            headers: {
              'Authorization': `Bearer ${currentUser.token}`
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [currentUser]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
  
      <div className="flex h-screen ml-[40px]">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="จำนวนผู้ป่วย" value="145" color="text-blue-600" />
              <Card title="หมอประจำการ" value="18" color="text-green-600" />
              <Card title="รายได้เดือนนี้" value="฿85,000" color="text-emerald-600" />
            </div>
          </main>
        </div>
      </div>
      
    )
  }
  
  function Card({ title, value, color }: { title: string; value: string; color: string }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-700">{title}</h2>
        <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
      </div>
    )
  }
  

export default Dashboard
