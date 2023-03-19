import { ethers } from 'ethers';
import CustomDexABI from '../utils/CustomDex.json';
import CustomTokenABI from '../utils/CustomToken.json';

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(address, CustomTokenABI, signer);

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      '0x27A1154dbBcf0CE95E4A0db920960844f30a40B1',
      CustomDexABI.abi,
      signer
    );

    return contractReader;
  }
};

const address = '0x27A1154dbBcf0CE95E4A0db920960844f30a40B1';
