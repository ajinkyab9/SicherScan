# Hybrid AI assisted Static Application Security Testing Platform Saas

This is a polyglot microservice architecture designed to execute on premise, air-gapped security audits of source code using quantized LLMs.

## System Architecture

* Frontend: React, Tailwind CSS, Monaco Editor Engine
* Gateway API: Node.js, Express, PostgreSQL
* Security Microservice: Python, FastAPI, Uvicorn
* Local AI Engine: Ollama (`qwen2.5-coder:7B` you can use any local LLM as per your preference and hardware capacity)

---

## Key Architectural Features

* Air-gapped & Sovereign Execution: This project has zero reliance on external APIs (eg. OpenAI, Anthropic etc) this ensures strict data privacy and GDPR Compliance

* Hybrid Storage Layer: Uses PostgreSQL with structured foreign-key relations for user management alongside `JSONB` columns to index flexible AI analysis payloads

* Polyglot Service Orchestration: Asynchronous inter-process communication between Node.js (Gateway) and FastAPI (AI Data Worker)

## Development Roadmap

  Phase 1: AI Sandbox & Microservice Layer

    * Setup isolated FastAPI worker
    * Integrate Ollama API calls with context window validation using `tiktoken`

  Phase 2: Core Gateway & Routing

    * Build Express API gateway
    * Implement service-to-service communication (`Node.js``FastAPI`)

  Phase 3: Relational Persistence & Security

    * Implement PostgreSQL schema (Users, Projects, Scans)
    * Add `JSONB` query capabilities for vulnerability payloads
    * Secure routes via JSON Web Tokens (JWT)

  Phase 4: Developer Dashboard

    * Construct React UI with Monaco Editor integration
    * Implement async stream loading indicators for scan results

  Phase 5: Polish & Edge Cases
  
    * Add error bounds for context overruns and model timeouts
