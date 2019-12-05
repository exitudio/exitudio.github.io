import React from "react";
import "./Research.scss";
const Research = () => {
  return (
    <div className="research-container">
      <hr />
      <h1>Research</h1>
      <hr />
      <b>Research Interests:</b> Self Supervised Reinforcement Learning and Computer Vision
      <hr />
      <h2>Computer Vision</h2>
      <ul>
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/experiment/RAM/RAM.ipynb"
            target="_blank"
          >
            [PAPER REPLICATION] RAM (Recurrent Models of Visual Attention) with Pytorch
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/tree/master/experiment/one-shot-learning"
            target="_blank"
          >
            Face recognition experiments using Contrastive Loss, Triplet Loss,
            Central Loss with lfw dataset and VGG dataset (~3M images)
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/tree/master/experiment/object-localization/AR_dt"
            target="_blank"
          >
            Object Localization
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/experiment/GAN/1.%20GAN%20tutorial%20%5BEXIT%5D.ipynb"
            target="_blank"
          >
            GAN with tensorflow
          </a>
        </li>
      </ul>
      <hr />
      <h2>Neural Network</h2>
      <ul>
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/experiment/RAM/RAM.ipynb"
            target="_blank"
          >
            My own NN framework
          </a>
          : the state of the art ML techniques using Pytorch such as multiple
          learning rates, learning rate finder, Cosine annealing, SGD with
          restarts, Test Time Augmentation, dropout
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/numpy-neural-net"
            target="_blank"
          >
            Neural Network with only Numpy (manual backprop)
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/neural-network-pytorch"
            target="_blank"
          >
            Visualize Neural Network
          </a>
        </li>
        <br />
      </ul>
      <h2>Reinforcement</h2>I developed my own framework on top of Pytorch to be
      able to plugin with multiple RL algorithms in order to experiment faster
      <ul>
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/doc/reinforcement/0.1%20summary.ipynb"
            target="_blank"
          >
            Basic algorithms
          </a>
          : Dynamic Programming, Monte Carlo with Epsilon-Greedy, TD SARSA,
          Q-Learning
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/doc/reinforcement/EXIT_rl/Sarsa.ipynb"
            target="_blank"
          >
            Sarsa (table base, approximation function), eligibility trace,
            experience replay
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/doc/reinforcement/EXIT_rl/REINFORCE.ipynb"
            target="_blank"
          >
            REINFORCE, REINFORCE with baseline, Softmax Policy, Gaussian Policy
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/doc/reinforcement/EXIT_rl/Actor-Critic.ipynb"
            target="_blank"
          >
            A2C
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://github.com/exitudio/research-ai/blob/master/doc/reinforcement/EXIT_rl/DDPG%20(Deep%20Deterministic%20Policy%20Gradients).ipynb"
            target="_blank"
          >
            DDPG
          </a>
        </li>
        <br />
      </ul>
    </div>
  );
};
export default Research;
