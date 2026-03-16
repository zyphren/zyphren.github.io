### 一、例题背景：双摆系统（两个质点的平面运动）
这是**拉格朗日方程在多自由度系统中的经典应用**——双摆（double pendulum）：
- 两个质量均为 $m$ 的质点，用长度均为 $l$ 的轻杆连接
- 广义坐标：两个摆角 $\theta_1, \theta_2$（系统自由度为 2）
- 目标：用拉格朗日方程推导系统的运动微分方程

---

### 二、建立拉格朗日函数 $L = T - V$

#### 1. 动能 $T$
- 第一个质点（上摆）位置：$\boldsymbol{r}_1 = (l\sin\theta_1, -l\cos\theta_1)$，速度平方：$v_1^2 = l^2\dot{\theta}_1^2$
- 第二个质点（下摆）位置：$\boldsymbol{r}_2 = (l\sin\theta_1 + l\sin\theta_2, -l\cos\theta_1 - l\cos\theta_2)$，速度平方：
  $$
  v_2^2 = l^2\left[\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_2-\theta_1)\right]
  $$
- 总动能：
  $$
  T = \frac{1}{2}mv_1^2 + \frac{1}{2}mv_2^2 = \frac{1}{2}ml^2\left[2\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_2-\theta_1)\right]
  $$

#### 2. 势能 $V$
取 $x$ 轴为零势能面，重力势能：
- 上摆：$V_1 = -mgl\cos\theta_1$
- 下摆：$V_2 = -mgl(\cos\theta_1 + \cos\theta_2)$
- 总势能：
  $$
  V = -mgl(2\cos\theta_1 + \cos\theta_2)
  $$

#### 3. 拉格朗日函数
$$
L = T - V = \frac{1}{2}ml^2\left[2\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_2-\theta_1)\right] + mgl(2\cos\theta_1 + \cos\theta_2)
$$

---

### 三，对 $\boldsymbol{\theta_1}$ 应用拉格朗日方程

拉格朗日方程：
$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right) - \frac{\partial L}{\partial \theta_1} = 0
$$

#### 1. 计算 $\frac{\partial L}{\partial \dot{\theta}_1}$
$$
\frac{\partial L}{\partial \dot{\theta}_1} = ml^2\left(2\dot{\theta}_1 + \dot{\theta}_2\cos(\theta_2-\theta_1)\right)
$$

#### 2. 计算时间导数 $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right)$
$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right) = ml^2\left[2\ddot{\theta}_1 + \ddot{\theta}_2\cos(\theta_2-\theta_1) - \dot{\theta}_2(\dot{\theta}_2-\dot{\theta}_1)\sin(\theta_2-\theta_1)\right]
$$

#### 3. 计算 $\frac{\partial L}{\partial \theta_1}$
$$
\frac{\partial L}{\partial \theta_1} = ml^2\dot{\theta}_1\dot{\theta}_2\sin(\theta_2-\theta_1) - 2mgl\sin\theta_1
$$

#### 4. 代入方程并整理
将上述结果代入拉格朗日方程，约去 $ml^2$ 后得到：
$$
2\ddot{\theta}_1 + \ddot{\theta}_2\cos(\theta_2-\theta_1) - \dot{\theta}_2^2\sin(\theta_2-\theta_1) + \frac{2g}{l}\sin\theta_1 = 0
$$
这就是**关于 $\theta_1$ 的运动微分方程**。

---

### 四、完整逻辑与后续
- 对 $\theta_2$ 重复同样步骤，可得到第二个运动微分方程，两个方程联立即双摆的完整动力学描述。
- 这个例子完美体现了拉格朗日方法的优势：**无需分析约束力，只需写出 $T$ 和 $V$，再做偏导运算即可得到运动方程**，尤其适合多自由度复杂系统。
- 双摆是典型的**混沌系统**，微小初始条件差异会导致运动完全不同，这也是它在非线性动力学中备受关注的原因。

---



