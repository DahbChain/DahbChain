// sdk-js/index.js
// DahbChain SDK - Step 3 (Wallet Management + Transactions + Tokens)

const crypto = require("crypto");

class DahbChain {
  constructor(config) {
    this.rpcUrl = config.rpcUrl;
    this.chainId = config.chainId;

    // ✅ محاكاة أرصدة
    this._mockBalances = {
      "0xUSER1": 1000,
      "0xUSER2": 500
    };

    // ✅ محفظة حالية
    this.currentWallet = null;
  }

  // ✅ Ping
  async ping() {
    return {
      ok: true,
      rpcUrl: this.rpcUrl,
      chainId: this.chainId,
      message: "DahbChain SDK skeleton is working (no real node yet)"
    };
  }

  // ✅ إنشاء محفظة جديدة
  createWallet() {
    const privateKey = crypto.randomBytes(32).toString("hex");
    const address =
      "0x" + crypto.createHash("sha256").update(privateKey).digest("hex").slice(0, 40);

    this.currentWallet = {
      privateKey,
      address
    };

    // رصيد تجريبي
    this._mockBalances[address] = 1000;

    return this.currentWallet;
  }

  // ✅ استيراد محفظة من مفتاح خاص
  importWallet(privateKey) {
    const address =
      "0x" + crypto.createHash("sha256").update(privateKey).digest("hex").slice(0, 40);

    this.currentWallet = {
      privateKey,
      address
    };

    if (!this._mockBalances[address]) {
      this._mockBalances[address] = 500;
    }

    return this.currentWallet;
  }

  // ✅ جلب عنوان المحفظة الحالية
  getWalletAddress() {
    if (!this.currentWallet) {
      return null;
    }
    return this.currentWallet.address;
  }

  // ✅ جلب الرصيد
  async getBalance(address) {
    const balance = this._mockBalances[address] || 0;

    return {
      address,
      balance,
      symbol: "DAHB"
    };
  }

  // ✅ إرسال معاملة
  async sendTransaction({ from, to, amount }) {
    if (!this._mockBalances[from]) {
      return {
        success: false,
        error: "Sender address not found"
      };
    }

    if (this._mockBalances[from] < amount) {
      return {
        success: false,
        error: "Insufficient balance"
      };
    }

    this._mockBalances[from] -= amount;
    this._mockBalances[to] = (this._mockBalances[to] || 0) + amount;

    return {
      success: true,
      txHash: "0xMOCK_TX_" + Date.now(),
      from,
      to,
      amount
    };
  }

  // ✅ التوكنز
  tokens = {
    createErc20: async (options) => {
      console.log("createErc20() called with:", options);

      return {
        success: true,
        tokenAddress: "0x000000000000000000000000000000000000dAhB",
        note: "Mock address for now. Real deployment will be implemented later."
      };
    }
  };
}

module.exports = {
  DahbChain
};
