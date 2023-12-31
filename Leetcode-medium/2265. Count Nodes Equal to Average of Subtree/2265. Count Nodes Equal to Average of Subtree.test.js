// Generated by CodiumAI
import { expect, it, describe } from 'vitest'
import { averageOfSubtree } from './2265. Count Nodes Equal to Average of Subtree'
describe('averageOfSubtree', () => {

    // The function receives a valid binary tree with at least one node.
    it('should calculate the average of the subtree for each node', () => {
        // Create a valid binary tree with at least one node
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        };

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(2);
    });

    // The function correctly calculates the average of the subtree for each node.
    it('should correctly calculate the average of the subtree for each node', () => {
        // Create a valid binary tree with at least one node
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        };

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(2);
    });

    // The function returns the number of nodes whose subtree average is equal to the node value.
    it('should return the number of nodes whose subtree average is equal to the node value', () => {
        // Create a valid binary tree with at least one node
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        };

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(2);
    });

    // The function receives an empty binary tree.
    it('should return 0 when the binary tree is empty', () => {
        // Create an empty binary tree
        const root = null;

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(0);
    });

    // The function receives a binary tree with only one node, whose value is not zero.
    it('should return 1 when the binary tree has only one node with a non-zero value', () => {
        // Create a binary tree with only one node
        const root = {
            val: 1,
            left: null,
            right: null
        };

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(1);
    });

    // The function receives a binary tree with only two nodes, whose values are not zero.
    it('should return 2 when the binary tree has two nodes with non-zero values', () => {
        // Create a binary tree with two nodes
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        };

        // Call the function under test
        const result = averageOfSubtree(root);

        // Assert the result
        expect(result).toBe(2);
    });
});
