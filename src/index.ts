/**
 * CE.SDK QR Code Editor Starterkit - Main Entry Point
 *
 * A design editor with QR code generation for creating stunning graphics.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initQRCodeEditor } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-qr-code-editor-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize QR Code Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initQRCodeEditor(cesdk);

    // ============================================================================
    // Scene Loading
    // ============================================================================

    // Load the QR code demo scene from the public showcases URL
    // This scene contains pre-made QR code elements for demonstration
    await cesdk.loadFromArchiveURL(resolveAssetPath('/assets/scene.archive'));

    // Select the first QR code block for immediate editing
    const qrCodeBlock = cesdk.engine.block.findByName('QR Code 1')[0];
    if (qrCodeBlock) {
      cesdk.engine.block.select(qrCodeBlock);
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
