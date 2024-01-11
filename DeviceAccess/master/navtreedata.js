/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", [
      [ "Logical Name Mapping plugins", "index.html#lnm", null ]
    ] ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", null ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", null ],
        [ "Design and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#implementation_async_NumericAddressed", null ],
        [ "Interface to implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#async_NumericAddressedBackend_interface", null ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ]
        ] ],
        [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", [
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", null ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.1", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md_doc_xdma_backend.html", [
      [ "Prerequisites", "md_doc_xdma_backend.html#autotoc_md14", null ],
      [ "Mapping of XDMA driver interfaces", "md_doc_xdma_backend.html#autotoc_md15", [
        [ "Introduction", "spec__transfer_element.html#autotoc_md2", null ],
        [ "A. Definitions", "spec__transfer_element.html#autotoc_md3", [
          [ "Side note", "basic_example.html#autotoc_md0", null ],
          [ "Details:", "q_and_a.html#autotoc_md1", null ],
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md4", null ]
        ] ],
        [ "B. Behavioural specification", "spec__transfer_element.html#autotoc_md5", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md6", null ]
        ] ],
        [ "C. Requirements for all implementations (full and decorator-like)", "spec__transfer_element.html#autotoc_md7", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md8", null ]
        ] ],
        [ "D. Requirements for full implementations (e.g. in backends)", "spec__transfer_element.html#autotoc_md9", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md10", null ]
        ] ],
        [ "E. Requirements for decorator-like implementations", "spec__transfer_element.html#autotoc_md11", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md12", null ]
        ] ],
        [ "AXI-Lite Master interface", "md_doc_xdma_backend.html#autotoc_md16", null ],
        [ "AXI MM DMA interface", "md_doc_xdma_backend.html#autotoc_md17", null ],
        [ "Interrupt lines (events)", "md_doc_xdma_backend.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"",
"_metadata_catalogue_8h_source.html",
"_unified_backend_test_8h.html#a91283b6c9ec83b1b6502cdb1f753104a",
"class_chimera_t_k_1_1_backend_register_catalogue_impl_iterator.html#abf8794f55d96e4185ebbb663ca730e84",
"class_chimera_t_k_1_1_dummy_backend_base.html#acce11a882262aa1d6e01dfc2c5459417",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_monostable_trigger_plugin.html#a4126849af04acb41fe3642a29177d844",
"class_chimera_t_k_1_1_numeric_addressed_backend.html#a7cf6250f28bb5fd926ae69d19af69aef",
"class_chimera_t_k_1_1_rebot_backend.html#a5b131273731812b8b3496ecfc8d78562",
"class_chimera_t_k_1_1_transfer_element.html#a6963608d2450a4cd9bfa95ef39428d49",
"class_chimera_t_k_1_1_uio_backend.html",
"class_example_backend.html#a69a167f471b871edf156bc37052e1948",
"functions_func_t.html",
"namespace_chimera_t_k.html#ad1f8efd0503fa72d47d28fcdb95c64b7",
"struct_byte_raw__fixed_point8__4u.html#a3576288bdad1755bc7f800a1b22d747f",
"struct_chimera_t_k_1_1_numeric_addressed_async_variable.html#a3469f9f4eed6373129f56d0d496427a8",
"struct_helper_process.html#a87c07b45edfd8e512e2aed1391e3242b",
"struct_reg_bit2_of_word_firmware__push.html",
"struct_reg_word_firmware_with_math___r__push.html#afc3bbd0e53690ea738d1b1356d3ee615",
"test_dummy_backend_8cpp.html#a00f8a92fbe12e8fa983751483c06980d",
"test_multiplexed_data_accesor_8cpp.html#a7110e26b46e2581206d0f7d47b0f0b4f",
"test_type_changing_decorator_8cpp.html#a46ab1970bad85d5f5049fd07f3e6dec0"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';