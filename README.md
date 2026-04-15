GET /process-payment


Flow:
1. Call payment-service  
2. If HTTP 200 → return response  
3. Else → call fallback-service  

---

## 🧪 How to Run

### Start Kubernetes
```bash
minikube start
Deploy services
kubectl apply -f k8s/base/
Start WSO2 MI
cd C:\Users\vikum\wso2mi-4.5.0\bin
micro-integrator.bat
Test API
curl http://localhost:8290/process-payment
🎯 Features
Failure simulation
Intelligent failover routing
API orchestration
Real-world integration pattern
👤 Author

Vinod Perera